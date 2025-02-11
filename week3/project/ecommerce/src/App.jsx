import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './CategoryList.jsx';
import ProductList from './ProductList.jsx';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';
import { FavoriteProvider } from './FavoriteContext.jsx';
import FavoritePage from './FavoritePage.jsx';
import Header from './Header.jsx';

function App() {

  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteProvider value={{ favorites, setFavorites }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </FavoriteProvider>
  );
}

function AppContent() {

  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();


const fetchProducts = async (url) => {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    // setAllProducts(data);
    setFilterProducts(data);
  } catch (error) {
    console.error(error);
    setError('Unable to get products, please try again');
  } finally {
    setLoading(false);
  }
};

// const fetchDefaultCard = async () => await fetchProducts('https://fakestoreapi.com/products');
const fetchDefaultCard = async () => {
  await fetchProducts('https://fakestoreapi.com/products');
  setAllProducts(filterProducts); // Обновляем allProducts только после загрузки всех товаров
};
const fetchSelectedCategory = async (category) => await fetchProducts(`https://fakestoreapi.com/products/category/${category}`);

// const fetchSelectedCategory = (category) => {
//   fetchProducts(`https://fakestoreapi.com/products/category/${category}`);
// };


  useEffect(() => {
    fetchDefaultCard(); 
  }, []);

  // const handleFilterProducts = (category) => {
  //   if (category) {
  //     const filtered = allProducts.filter(product => product.category === category);
  //     setFilterProducts(filtered);
  //   } else {
  //     setFilterProducts(allProducts);
  //   }
  // };
    
  const handleFilterProducts = (category) => {
    if (category) {
       fetchSelectedCategory(category); // Загружаем товары по категории с API
    } else {
      fetchDefaultCard(); // Загружаем все товары
    }
  };


    const resetFilter = () => {
      // setFilterProducts(allProducts);
      fetchDefaultCard();
      navigate('/');
    };
  
    useEffect(() => {
      if (location.pathname === '/') {
        // setFilterProducts(allProducts);
        fetchDefaultCard();
      }
    }, [location.pathname]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <Routes>
        <Route path="/" element={
          <>
          <Header title="Products" resetFilter={resetFilter} />
          <CategoryList onFilterProducts={handleFilterProducts} />
          <ProductList filterProducts={filterProducts} />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<FavoritePage allProducts={allProducts} />} />
      </Routes>
  );
};

export default App;

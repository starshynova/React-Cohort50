import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './CategoryList.jsx';
import ProductList from './ProductList.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';
import { FavoriteProvider } from './FavoriteContext.jsx';
import FavoritePage from './FavoritePage.jsx';
import Header from './Header.jsx';

function App() {
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


const fetchProducts = async (url) => {
  try {
    setLoading(true);
    setError(null);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    setFilterProducts(data);
  } catch (error) {
    console.error(error);
    setError('Unable to get products, please try again');
  } finally {
    setLoading(false);
  }
};

const fetchDefaultCard = () => fetchProducts('https://fakestoreapi.com/products');
const fetchSelectedCategory = (category) => fetchProducts(`https://fakestoreapi.com/products/category/${category}`);


  useEffect(() => {
    fetchDefaultCard(); 
  }, []);

  const handleFilterProducts = (category) => {
      fetchSelectedCategory(category);
    }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <FavoriteProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Header title="Products" />
          {/* <div calssName="header">
          <h1>Products</h1>
          <Link to={'/'}>
            <a><h3>All products</h3></a>
          </Link>
          <Link to={'/favorites'}>
            <a><h3>Favorites</h3></a>
          </Link>  
          </div> */}
          <CategoryList onFilterProducts={handleFilterProducts} />
          <ProductList filterProducts={filterProducts} />
          </>
        } />
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  </FavoriteProvider>
  )
};

export default App;

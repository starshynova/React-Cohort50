import { useState, useEffect } from 'react';
import '../App.css';
import CategoryList from './CategoryList.jsx';
import ProductList from './ProductList.jsx';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail.jsx';
import FavoritePage from '../pages/FavoritePage.jsx';
import Header from './Header.jsx';
import useFetch from '../hooks/useFetch.jsx';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const { data: allProducts, loading, error } = useFetch('https://fakestoreapi.com/products'); // Загружаем все продукты
  const { data: filterProducts } = useFetch(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products');

  const handleFilterProducts = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const resetFilter = () => {
    setCategory(null);
    navigate('/');
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setCategory(null); 
    }
  }, [location.pathname]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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

export default AppContent;



import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './CategoryList.jsx';
import ProductList from './ProductList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <h1>Products</h1>
          <CategoryList onFilterProducts={handleFilterProducts} />
          <ProductList filterProducts={filterProducts} />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

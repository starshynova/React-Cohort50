import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './CategoryList.jsx';
import CardSetMain from './CardSetMain.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';

function App() {
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDefaultCard = async () => {
    try {
    setLoading(true);
    setError(null);
    const response = await fetch('https://fakestoreapi.com/products');
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
}

  const fetchSelectedCategory = async (category) => {
    try {
    setLoading(true);
    setError(null);
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category products');
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

  useEffect(() => {
    fetchDefaultCard(); 
  }, []);

  const handleFilterProducts = (category) => {
    if (category === 'all') {
      fetchDefaultCard(); 
    } else {
      fetchSelectedCategory(category);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <h1>Products</h1>
          <CategoryList setFilterProducts={handleFilterProducts} />
          <CardSetMain filterProducts={filterProducts} />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

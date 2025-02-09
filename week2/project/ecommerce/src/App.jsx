import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './CategoryList.jsx';
import CardSetMain from './CardSetMain.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

function App() {
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDefaultCard = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setFilterProducts(data);
    setLoading(false);
  }

  const fetchSelectedCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    setFilterProducts(data);
    setLoading(false);
  }

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
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

import { useState } from 'react'
import './App.css'
import ButtonSet from './ButtonSet.jsx';
import CardSetMain from './CardSetMain.jsx';
import allProducts from './fake-data/all-products.js';

function App() {
  const [filterProducts, setFilterProducts] = useState(allProducts);

  const handleFilterProducts = (category) => {
    const filtered = allProducts.filter(product => product.category === category.replace(/^FAKE:\s*/, ''));
    setFilterProducts(filtered);
  };

  return (
    <main>
    <ButtonSet setFilterProducts={handleFilterProducts} />
    <CardSetMain filterProducts={filterProducts} /> 
    </main>
  )
}

export default App

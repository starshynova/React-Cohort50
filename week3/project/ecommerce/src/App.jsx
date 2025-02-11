import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { FavoriteProvider } from './context/FavoriteContext.jsx';
import AppContent from './components/AppContent.jsx';

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

export default App;

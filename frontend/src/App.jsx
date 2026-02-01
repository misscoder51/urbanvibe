import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import HomeLanding from './components/HomeLanding';
import CategoryPage from './components/CategoryPage';
import ProductDetails from './components/ProductDetails';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';

import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist(prev => [...prev, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const moveToCart = (product) => {
    addToCart({ ...product, selectedSize: product.sizes ? product.sizes.split(', ')[0] : 'One Size' });
    removeFromWishlist(product.id);
  };

  const handleSearch = (term) => {
    navigate(`/shop?search=${encodeURIComponent(term)}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header cartCount={cart.length} onSearch={handleSearch} />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/shop" element={<CategoryPage />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={moveToCart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/cart" element={
            <div className="container" style={{ marginTop: '40px' }}>
              <h2>My Bag ({cart.length} items)</h2>
              {cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', margin: '20px 0', border: '1px solid #f0f0f0', padding: '10px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover' }} />
                  <div>
                    <h4>{item.brand}</h4>
                    <p>{item.name}</p>
                    <p>Size: {item.selectedSize}</p>
                    <p style={{ fontWeight: 'bold' }}>₹{item.price}</p>
                  </div>
                </div>
              ))}
              {cart.length > 0 && <button className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }}>PLACE ORDER</button>}
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

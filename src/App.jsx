import React, { useState, useEffect } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import MainBody from './components/MainBody';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Admin from './components/Admin/index.jsx';
import { AuthProvider } from './components/Auth/AuthContext';
import './App.css';

const AppContent = ({ currentPage, setCurrentPage, navigateTo }) => {
  return (
    <div className={`min-h-screen ${currentPage === 'admin' ? 'bg-[#f1f5f9]' : 'bg-bg-main'} flex flex-col justify-between`}>
      <div>
        {currentPage !== 'admin' && <Header onNavigate={navigateTo} currentPage={currentPage} />}
        {currentPage === 'home' && <MainBody onNavigate={navigateTo} />}
        {currentPage === 'products' && <ProductList onNavigate={navigateTo} />}
        {currentPage === 'product-details' && <ProductDetails onNavigate={navigateTo} />}
        {currentPage === 'cart' && <Cart onNavigate={navigateTo} />}
        {currentPage === 'login' && <Login onNavigate={navigateTo} />}
        {currentPage === 'register' && <Register onNavigate={navigateTo} />}
        {currentPage === 'admin' && <Admin onNavigate={navigateTo} />}
      </div>
      {currentPage !== 'admin' && <Footer />}
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/products') return 'products';
      if (path === '/product-details') return 'product-details';
      if (path === '/cart') return 'cart';
      if (path === '/login') return 'login';
      if (path === '/register') return 'register';
      if (path === '/admin') return 'admin';
      return 'home';
    }
    return 'home';
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
    let newPath = '/';
    if (page === 'products') newPath = '/products';
    else if (page === 'product-details') newPath = '/product-details';
    else if (page === 'cart') newPath = '/cart';
    else if (page === 'login') newPath = '/login';
    else if (page === 'register') newPath = '/register';
    else if (page === 'admin') newPath = '/admin';
    
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        const path = window.location.pathname;
        if (path === '/products') setCurrentPage('products');
        else if (path === '/product-details') setCurrentPage('product-details');
        else if (path === '/cart') setCurrentPage('cart');
        else if (path === '/login') setCurrentPage('login');
        else if (path === '/register') setCurrentPage('register');
        else if (path === '/admin') setCurrentPage('admin');
        else setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <AuthProvider>
      <AppContent currentPage={currentPage} setCurrentPage={setCurrentPage} navigateTo={navigateTo} />
    </AuthProvider>
  );
};

export default App;

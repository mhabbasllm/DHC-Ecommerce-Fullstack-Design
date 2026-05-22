import React from 'react';
import { 
  User,
  SearchCode, 
  ShieldCheck, 
  Send, 
  Package,
  Mail,
  ArrowRight,
  LogOut
} from 'lucide-react';
import { useAuth } from './Auth/AuthContext';
import heroBanner from '../assets/Image/backgrounds/Banner-board-800x420 2.png';
// Tech images
import tech1 from '../assets/Image/tech/image 23.png';
import tech2 from '../assets/Image/tech/image 29.png';
import tech3 from '../assets/Image/tech/6.png';
import tech4 from '../assets/Image/tech/8.png';
import tech5 from '../assets/Image/tech/image 34.png';
import tech6 from '../assets/Image/tech/image 32.png';
import tech7 from '../assets/Image/tech/image 33.png';
import tech8 from '../assets/Image/tech/image 86.png';
import tech9 from '../assets/Image/tech/image 85.png';
// Interior images
import int1 from '../assets/Image/interior/1.png';
import int2 from '../assets/Image/interior/3.png';
import int3 from '../assets/Image/interior/6.png';
import int4 from '../assets/Image/interior/7.png';
import int5 from '../assets/Image/interior/8.png';
import int6 from '../assets/Image/interior/9.png';
import int7 from '../assets/Image/interior/image 89.png';
import int8 from '../assets/Image/interior/image 93.png';
// Background images for sections
import homeBanner from '../assets/Image/backgrounds/Group 969.png';
import techBannerBg from '../assets/Image/backgrounds/image 98.png';
import inquiryBg from '../assets/Image/backgrounds/Group 982.png';
// Recommended images
import cloth1 from '../assets/Layout/alibaba/Image/cloth/image 24.png';
import cloth2 from '../assets/Layout/alibaba/Image/cloth/image 26.png';
import cloth3 from '../assets/Layout/alibaba/Image/cloth/image 30.png';
import cloth4 from '../assets/Layout/alibaba/Image/cloth/Bitmap.png';
import cloth5 from '../assets/Layout/alibaba/Image/cloth/Bitmap2.png';
import cloth6 from '../assets/Layout/alibaba/Image/cloth/2 1.png';
// Extra services images
import service1 from '../assets/Image/backgrounds/image 106.png';
import service2 from '../assets/Image/backgrounds/image 107.png';
import service3 from '../assets/Image/backgrounds/Mask group.png';
import service4 from '../assets/Image/backgrounds/Mask group1.png';

const getAssetUrl = (path) => {
  // Simple helper to resolve relative paths from src/assets
  // This assumes the path passed in starts with '../assets/'
  return new URL(path, import.meta.url).href;
};

const MainBody = ({ onNavigate }) => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleProductsClick = () => {
    if (onNavigate) onNavigate('products');
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const dealsItems = [
    { img: tech7, title: 'Smart watches', discount: '-25%' },
    { img: tech5, title: 'Laptops', discount: '-15%' },
    { img: tech3, title: 'GoPro cameras', discount: '-40%' },
    { img: tech2, title: 'Headphones', discount: '-25%' },
    { img: tech1, title: 'Canon camreras', discount: '-25%' },
  ];

  const homeOutdoorItems = [
    { title: 'Soft chairs', price: '19', img: int1 },
    { title: 'Sofa & chair', price: '19', img: int2 },
    { title: 'Kitchen dishes', price: '19', img: int3 },
    { title: 'Smart watches', price: '19', img: int4 },
    { title: 'Kitchen mixer', price: '100', img: int5 },
    { title: 'Blenders', price: '39', img: int6 },
    { title: 'Home appliance', price: '19', img: int7 },
    { title: 'Coffee maker', price: '10', img: int8 },
  ];

  const techItems = [
    { title: 'Smart watches', price: '19', img: tech7 },
    { title: 'Cameras', price: '89', img: tech3 },
    { title: 'Headphones', price: '10', img: tech8 },
    { title: 'Smart watches', price: '90', img: tech4 },
    { title: 'Gaming set', price: '35', img: tech2 },
    { title: 'Laptops & PC', price: '340', img: tech5 },
    { title: 'Smartphones', price: '19', img: tech6 },
    { title: 'Electric kettle', price: '240', img: tech9 },
  ];

  const recommendedItems = [
    { img: cloth1, price: '10.30', title: 'T-shirts with multiple colors, for men' },
    { img: cloth2, price: '10.30', title: 'Jeans shorts for men blue color' },
    { img: cloth3, price: '12.50', title: 'Brown winter coat medium size' },
    { img: cloth4, price: '34.00', title: 'Jeans bag for travel for men' },
    { img: cloth5, price: '99.00', title: 'Leather wallet' },
    { img: cloth6, price: '9.99', title: 'Canon camera black, 100x zoom' },
    { img: tech8, price: '8.99', title: 'Headset for gaming with mic' },
    { img: cloth5, price: '10.30', title: 'Smartwatch silver color modern' },
    { img: int4, price: '10.30', title: 'Blue wallet for men leather metarfial' },
    { img: tech4, price: '240.00', title: 'Jeans bag for travel for men' },
  ];

  return (
    <main>
      {/* ====== Hero Section ====== */}
      <section className="py-0 md:py-5">
        {/* Desktop: 3-column grid */}
        <div className="container hidden md:block">
          <div className="grid grid-cols-[250px_1fr_200px] gap-5 bg-white p-5 border border-gray-200 rounded-md">
            <div className="category-sidebar">
              <ul className="space-y-1">
                {['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'].map((cat, idx) => (
                  <li 
                    key={idx} 
                    className={`p-2.5 rounded-md cursor-pointer transition-colors hover:bg-blue-50 ${idx === 0 ? 'bg-blue-50 font-medium' : ''}`}
                    onClick={handleProductsClick}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md p-10 flex flex-col justify-center min-h-[350px] bg-cover bg-center relative" style={{ backgroundImage: `url(${heroBanner})` }}>
              <h2 className="text-2xl mb-2.5">Latest trending</h2>
              <h1 className="text-4xl font-bold mb-5">Electronic items</h1>
              <button 
                className="bg-white text-black px-6 py-2 rounded-md font-medium w-fit shadow-sm hover:bg-gray-50 transition-colors"
                onClick={handleProductsClick}
              >
                Learn more
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {isAuthenticated && user ? (
                <div className="bg-gradient-to-br from-[#e3f0ff] to-[#b3d9ff] p-4 rounded-md shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {user.fullName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Welcome back!</p>
                      <p className="text-base font-bold text-brand-blue">{user.fullName}</p>
                    </div>
                  </div>
                  <button 
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="bg-[#e3f0ff] p-4 rounded-md">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <p className="text-sm">Hi, user<br/>let's get stated</p>
                  </div>
                  <button 
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white py-2 rounded-md font-medium mb-2.5 transition-colors cursor-pointer shadow-sm"
                    onClick={() => onNavigate('register')}
                  >
                    Join now
                  </button>
                  <button 
                    className="w-full bg-white hover:bg-gray-50 text-brand-blue py-2 rounded-md border border-gray-200 font-medium transition-colors cursor-pointer shadow-sm"
                    onClick={() => onNavigate('login')}
                  >
                    Log in
                  </button>
                </div>
              )}
              <div className="bg-[#f38332] p-4 rounded-md text-white text-sm">
                <p>Get US $10 off with a new supplier</p>
              </div>
              <div className="bg-[#55bdc3] p-4 rounded-md text-white text-sm">
                <p>Send quotes with supplier preferences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Just the hero banner */}
        <div className="md:hidden p-6 flex flex-col justify-center min-h-[180px] bg-cover bg-center relative" style={{ backgroundImage: `url(${heroBanner})` }}>
          <h2 className="text-[#1c1c1c] text-lg mb-1">Latest trending</h2>
          <h1 className="text-[#1c1c1c] text-2xl font-bold mb-4">Electronic items</h1>
          <button 
            className="bg-white text-brand-blue px-5 py-2 rounded-md font-semibold w-fit shadow-sm text-sm hover:bg-gray-50 transition-colors"
            onClick={handleProductsClick}
          >
            Learn more
          </button>
        </div>
      </section>

      {/* ====== Deals and Offers ====== */}
      {/* Desktop */}
      <section className="container mt-0 md:mt-5 hidden md:block">
        <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="p-5 w-[250px] border-r border-gray-200">
            <h3 className="text-lg font-bold">Deals and offers</h3>
            <p className="text-brand-gray text-sm">Hygiene equipments</p>
            <div className="flex gap-2.5 mt-5">
              {[{v:'04',l:'Days'},{v:'13',l:'Hour'},{v:'34',l:'Min'},{v:'56',l:'Sec'}].map((t, idx) => (
                <div key={idx} className="bg-[#606060] text-white p-2 rounded-md text-center min-w-[45px]">
                  <span className="block text-base font-bold">{t.v}</span>
                  <label className="text-[10px] block">{t.l}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-5">
            {dealsItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 text-center border-r border-gray-200 last:border-r-0 hover:shadow-inner transition-shadow cursor-pointer"
                onClick={handleProductsClick}
              >
                <img src={item.img} alt={item.title} className="h-28 mx-auto object-contain mb-4" />
                <p className="text-sm mb-2">{item.title}</p>
                <span className="bg-[#ffe3e3] text-[#eb001b] px-3 py-1 rounded-full text-xs font-bold">{item.discount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden bg-white border-y border-gray-200 mt-3 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-brand-dark">Deals and offers</h3>
              <p className="text-brand-gray text-xs">Electronic equipments</p>
            </div>
            <div className="flex gap-1.5">
              {[{v:'13',l:'Hour'},{v:'34',l:'Min'},{v:'56',l:'Sec'}].map((t, idx) => (
                <div key={idx} className="bg-[#eff2f4] text-[#8b96a5] px-2.5 py-1 rounded text-center min-w-[38px] border border-[#e0e0e0]">
                  <span className="block text-sm font-bold text-[#1c1c1c]">{t.v}</span>
                  <label className="text-[8px] block">{t.l}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar">
          {[
            { img: cloth2, title: 'Smart watches', discount: '-25%' },
            { img: tech2, title: 'Smart watches', discount: '-25%' },
            { img: tech5, title: 'Smart watches', discount: '-25%' },
            { img: tech3, title: 'Smart watches', discount: '-25%' },
            { img: tech1, title: 'Smart watches', discount: '-25%' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 text-center border-r border-gray-200 last:border-r-0 cursor-pointer flex-shrink-0 min-w-[120px]"
              onClick={handleProductsClick}
            >
              <img src={item.img} alt={item.title} className="h-20 mx-auto object-contain mb-3" />
              <p className="text-xs mb-1.5 text-brand-dark">{item.title}</p>
              <span className="bg-[#ffe3e3] text-[#eb001b] px-2 py-0.5 rounded-full text-[10px] font-bold">{item.discount}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Home and Outdoor ====== */}
      {/* Desktop */}
      <section className="container mt-5 hidden md:block">
        <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-[280px] p-5 bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${homeBanner})` }}>
            <h3 className="text-xl font-bold mb-5 max-w-[150px]">Home and outdoor</h3>
            <button 
              className="bg-white text-black px-4 py-2 rounded-md font-medium w-fit hover:bg-gray-50 transition-colors"
              onClick={handleProductsClick}
            >
              Source now
            </button>
          </div>
          <div className="flex-1 grid grid-cols-4 grid-rows-2">
            {homeOutdoorItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 border-r border-b border-gray-200 flex justify-between items-end hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={handleProductsClick}
              >
                <div>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-brand-gray">From <br/>USD {item.price}</p>
                </div>
                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden bg-white border-y border-gray-200 mt-3 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-base font-bold text-brand-dark">Home and outdoor</h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar">
          {[
            { img: int3, title: 'Smart watches', price: '19' },
            { img: null, title: 'Smart watches', price: '19' },
            { img: int1, title: 'Smart watches', price: '19' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 text-center border-r border-gray-200 last:border-r-0 cursor-pointer flex-shrink-0 min-w-[120px] flex flex-col justify-between"
              onClick={handleProductsClick}
            >
              <div className="h-16 flex items-center justify-center mb-2">
                {item.img ? (
                  <img src={item.img} alt={item.title} className="h-16 mx-auto object-contain" />
                ) : (
                  <div className="h-16 w-16"></div>
                )}
              </div>
              <div>
                <h4 className="text-xs font-medium mb-0.5 text-brand-dark">{item.title}</h4>
                <p className="text-[10px] text-brand-gray">From USD {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <span className="text-brand-blue text-sm font-semibold cursor-pointer flex items-center gap-1" onClick={handleProductsClick}>
            Source now <ArrowRight size={14} />
          </span>
        </div>
      </section>

      {/* ====== Consumer Electronics ====== */}
      {/* Desktop */}
      <section className="container mt-5 hidden md:block">
        <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-[280px] p-5 bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${techBannerBg})` }}>
            <h3 className="text-xl font-bold mb-5 max-w-[150px]">Consumer electronics and gadgets</h3>
            <button 
              className="bg-white text-black px-4 py-2 rounded-md font-medium w-fit hover:bg-gray-50 transition-colors"
              onClick={handleProductsClick}
            >
              Source now
            </button>
          </div>
          <div className="flex-1 grid grid-cols-4 grid-rows-2">
            {techItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 border-r border-b border-gray-200 flex justify-between items-end hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={handleProductsClick}
              >
                <div>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-brand-gray">From <br/>USD {item.price}</p>
                </div>
                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden bg-white border-y border-gray-200 mt-3 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-base font-bold text-brand-dark">Consumer electronics</h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar">
          {[
            { img: tech6, title: 'Smart watches', price: '19' },
            { img: tech4, title: 'Smart watches', price: '19' },
            { img: tech7, title: 'Smart watches', price: '19' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 text-center border-r border-gray-200 last:border-r-0 cursor-pointer flex-shrink-0 min-w-[120px] flex flex-col justify-between"
              onClick={handleProductsClick}
            >
              <img src={item.img} alt={item.title} className="h-16 mx-auto object-contain mb-2" />
              <div>
                <h4 className="text-xs font-medium mb-0.5 text-brand-dark">{item.title}</h4>
                <p className="text-[10px] text-brand-gray">From USD {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <span className="text-brand-blue text-sm font-semibold cursor-pointer flex items-center gap-1" onClick={handleProductsClick}>
            Source now <ArrowRight size={14} />
          </span>
        </div>
      </section>

      {/* ====== Inquiry Section ====== */}
      {/* Desktop */}
      <section className="container mt-5 hidden md:block">
        <div className="flex bg-cover bg-center rounded-md p-10 justify-between text-white relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.29), rgba(0, 102, 255, 0.29)), url(${inquiryBg})` }}>
          <div className="max-w-[450px] relative z-10">
            <h2 className="text-3xl font-bold mb-4">An easy way to send requests to all suppliers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="bg-white p-6 rounded-md w-[450px] text-brand-dark relative z-10 shadow-lg">
            <h3 className="text-lg font-bold mb-5">Send quote to suppliers</h3>
            <input type="text" placeholder="What item you need?" className="w-full p-2.5 mb-4 border border-gray-300 rounded outline-none focus:border-brand-blue" />
            <textarea placeholder="Type more details" rows="3" className="w-full p-2.5 mb-4 border border-gray-300 rounded outline-none focus:border-brand-blue"></textarea>
            <div className="flex gap-2.5 mb-4">
              <input type="text" placeholder="Quantity" className="flex-[3] p-2.5 border border-gray-300 rounded outline-none focus:border-brand-blue" />
              <select className="flex-[2] p-2.5 border border-gray-300 rounded outline-none bg-white">
                <option>Pcs</option>
                <option>Kg</option>
              </select>
            </div>
            <button className="w-full bg-brand-blue text-white py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors">Send inquiry</button>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden bg-cover bg-center py-6 px-4 text-white relative overflow-hidden mt-3" style={{ backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.55), rgba(0, 102, 255, 0.55)), url(${inquiryBg})` }}>
        <h2 className="text-xl font-bold mb-2 leading-tight">An easy way to send requests to all suppliers</h2>
        <button 
          className="bg-brand-blue text-white px-5 py-2 rounded-md font-semibold text-sm mt-2 hover:bg-blue-700 transition-colors"
          onClick={handleProductsClick}
        >
          Send inquiry
        </button>
      </section>

      {/* ====== Recommended Items ====== */}
      <section className="container mt-6 md:mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 px-4 md:px-0">Recommended items</h2>
        
        {/* Desktop: 5 columns */}
        <div className="hidden md:grid grid-cols-5 gap-5">
          {recommendedItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={handleProductsClick}
            >
              <img src={item.img} alt={item.title} className="w-full h-44 object-contain mb-4" />
              <p className="font-bold text-base mb-1">${item.price}</p>
              <p className="text-brand-gray text-sm line-clamp-2">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile: 2 columns */}
        <div className="grid grid-cols-2 gap-2 px-3 md:hidden">
          {[
            { img: cloth1, price: '10.30', title: 'T-shirts with multiple colors, for men' },
            { img: cloth3, price: '10.30', title: 'T-shirts with multiple colors, for men' },
            { img: int4, price: '10.30', title: 'T-shirts with multiple colors, for men' },
            { img: int2, price: '10.30', title: 'T-shirts with multiple colors, for men' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-md p-3 hover:shadow-sm transition-shadow cursor-pointer flex flex-col justify-between"
              onClick={handleProductsClick}
            >
              <div className="h-28 flex items-center justify-center mb-3">
                <img src={item.img} alt={item.title} className="max-h-28 mx-auto object-contain" />
              </div>
              <div>
                <p className="font-bold text-sm mb-1 text-brand-dark">${item.price}</p>
                <p className="text-brand-gray text-xs line-clamp-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Extra Services ====== */}
      <section className="container mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-5 px-3 md:px-0">Our extra services</h2>
        {/* Desktop: 4 columns | Mobile: 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 px-3 md:px-0">
          {[
            { title: 'Source from Industry Hubs', icon: <SearchCode size={20} />, img: service2 },
            { title: 'Customize Your Products', icon: <Package size={20} />, img: service4 },
            { title: 'Fast, reliable shipping by ocean or air', icon: <Send size={20} />, img: service1 },
            { title: 'Product monitoring and inspection', icon: <ShieldCheck size={20} />, img: service3 },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-md overflow-hidden relative group">
              <div className="h-[90px] md:h-[120px] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="absolute top-[70px] md:top-[100px] right-4 md:right-5 w-9 h-9 md:w-11 md:h-11 bg-[#d1e7ff] border-2 border-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="p-3 md:p-5 pt-5 md:pt-7">
                <p className="font-medium text-xs md:text-sm leading-tight max-w-[150px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Regions Section ====== */}
      <section className="container mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-5 px-3 md:px-0">Suppliers by region</h2>
        {/* Desktop: 5 columns | Mobile: 2 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 px-3 md:px-0">
          {[
            { name: 'Arabic Emirates', url: 'shopname.ae', flag: 'src/assets/Layout1/Image/flags/AE@2x.png' },
            { name: 'Australia', url: 'shopname.ae', flag: 'src/assets/Layout1/Image/flags/icon.png' },
            { name: 'United States', url: 'shopname.ae', flag: 'src/assets/Layout1/Image/flags/US@2x.png' },
            { name: 'Russia', url: 'shopname.ru', flag: 'src/assets/Layout1/Image/flags/RU@2x.png' },
            { name: 'Italy', url: 'shopname.it', flag: 'src/assets/Layout1/Image/flags/IT@2x.png' },
            { name: 'Denmark', url: 'denmark.com.dk', flag: 'src/assets/Layout1/Image/flags/DE@2x.png' },
            { name: 'France', url: 'shopname.com.fr', flag: 'src/assets/Layout1/Image/flags/FR@2x.png' },
            { name: 'Arabic Emirates', url: 'shopname.ae', flag: 'src/assets/Layout1/Image/flags/AE@2x.png' },
            { name: 'China', url: 'shopname.ae', flag: 'src/assets/Layout1/Image/flags/icon.png' },
            { name: 'Great Britain', url: 'shopname.co.uk', flag: 'src/assets/Layout1/Image/flags/DE@2x.png' },
          ].map((region, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <img src={region.flag} alt={region.name} className="w-7 h-5" />
              <div>
                <h4 className="text-xs md:text-sm font-medium">{region.name}</h4>
                <p className="text-[10px] md:text-xs text-brand-gray">{region.url}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Newsletter ====== */}
      <section className="mt-10 bg-[#eff2f4] py-10 md:py-14 text-center">
        <div className="container px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Subscribe on our newsletter</h2>
          <p className="text-brand-gray mb-6 md:mb-8 text-sm md:text-base">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-[500px] mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hidden sm:block">
              <Mail size={18} />
            </div>
            <input type="email" placeholder="Email" className="sm:pl-11 pl-4 pr-4 py-2.5 w-full border border-gray-300 rounded-md outline-none focus:border-brand-blue" />
            <button className="bg-brand-blue text-white px-8 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainBody;

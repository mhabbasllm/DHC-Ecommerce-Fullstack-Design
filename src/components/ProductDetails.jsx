import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  ShieldAlert, 
  Globe, 
  MessageSquare, 
  ShoppingBag, 
  Check, 
  Mail,
  ChevronRight,
  ChevronLeft,
  Eye,
  ShieldCheck,
  ShoppingCart,
  User,
  ArrowLeft
} from 'lucide-react';

// Import clothing assets
import cloth1 from '../assets/Layout/alibaba/Image/cloth/Bitmap.png';
import cloth2 from '../assets/Layout/alibaba/Image/cloth/2 1.png';
import cloth3 from '../assets/Layout/alibaba/Image/cloth/Bitmap2.png';
import cloth4 from '../assets/Layout/alibaba/Image/cloth/image 24.png';
import cloth5 from '../assets/Layout/alibaba/Image/cloth/image 26.png';
import cloth6 from '../assets/Layout/alibaba/Image/cloth/image 30.png';

// Import tech assets for sidebar and related products
import tech1 from '../assets/Image/tech/image 23.png';
import tech2 from '../assets/Image/tech/image 29.png';
import tech3 from '../assets/Image/tech/6.png';
import tech4 from '../assets/Image/tech/8.png';
import tech5 from '../assets/Image/tech/image 34.png';
import tech6 from '../assets/Image/tech/image 32.png';
import tech7 from '../assets/Image/tech/image 33.png';
import tech8 from '../assets/Image/tech/image 86.png';
import tech9 from '../assets/Image/tech/image 85.png';

const ProductDetails = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState(cloth1);
  const [activeTab, setActiveTab] = useState('description');

  const thumbnails = [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6];

  const specs = [
    { name: 'Model', value: '#8786867' },
    { name: 'Style', value: 'Classic style' },
    { name: 'Certificate', value: 'ISO-898921212' },
    { name: 'Size', value: '34mm x 450mm x 19mm' },
    { name: 'Memory', value: '36GB RAM' },
  ];

  const features = [
    'Some great feature name here',
    'Lorem ipsum dolor sit amet, consectetur',
    'Duis aute irure dolor in reprehenderit',
    'Some great feature name here',
  ];

  const youMayLike = [
    { id: 1, img: cloth5, title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50' },
    { id: 2, img: cloth3, title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50' },
    { id: 3, img: tech7, title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50' },
    { id: 4, img: cloth4, title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50' },
    { id: 5, img: cloth6, title: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50' },
  ];

  const relatedProducts = [
    { id: 1, img: cloth1, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
    { id: 2, img: tech7, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
    { id: 3, img: tech8, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
    { id: 4, img: cloth3, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
    { id: 5, img: tech4, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
    { id: 6, img: cloth6, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00' },
  ];

  const activeIdx = thumbnails.indexOf(activeImage);
  const goNext = () => setActiveImage(thumbnails[(activeIdx + 1) % thumbnails.length]);
  const goPrev = () => setActiveImage(thumbnails[(activeIdx - 1 + thumbnails.length) % thumbnails.length]);

  return (
    <main className="bg-[#f7f8fa] py-0 md:py-6 text-brand-dark font-sans">
      <div className="container max-w-[1200px] mx-auto px-4">
        
        {/* Breadcrumbs - desktop only */}
        <div className="text-sm text-brand-gray mb-5 flex-wrap items-center gap-2 select-none hidden md:flex">
          <span className="hover:text-brand-blue cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="hover:text-brand-blue cursor-pointer transition-colors" onClick={() => onNavigate('products')}>Clothings</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="hover:text-brand-blue cursor-pointer transition-colors" onClick={() => onNavigate('products')}>Men's wear</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-brand-gray font-medium">Summer clothing</span>
        </div>

        {/* ====== MOBILE PRODUCT VIEW ====== */}
        <div className="md:hidden">
          {/* Mobile header: back + cart + user */}
          <div className="flex items-center justify-between py-3 px-1 mb-2">
            <button onClick={() => onNavigate('products')} className="text-brand-dark p-1 cursor-pointer">
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-4">
              <ShoppingCart size={20} className="text-brand-dark cursor-pointer" onClick={() => onNavigate('cart')} />
              <User size={20} className="text-brand-dark cursor-pointer hover:text-brand-blue" onClick={() => onNavigate('login')} />
            </div>
          </div>

          <div className="relative bg-white rounded-md mb-4">
            <div className="h-[300px] flex items-center justify-center p-6 overflow-hidden select-none">
              <img src={activeImage} alt="Product" className="max-h-full max-w-full object-contain" />
            </div>
            <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow cursor-pointer"><ChevronLeft size={18} /></button>
            <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow cursor-pointer"><ChevronRight size={18} /></button>
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-3 text-xs select-none mb-2 px-1">
            <div className="flex items-center gap-0.5">
              {Array.from({length:5}).map((_,i) => <Star key={i} size={14} className={i<4?'text-[#ff9017] fill-[#ff9017]':'text-gray-300'} />)}
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-1 text-brand-gray"><MessageSquare size={12} /> 32 reviews</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-1 text-brand-gray"><ShoppingBag size={12} /> 154 sold</span>
          </div>

          {/* Product title */}
          <h1 className="text-base font-bold text-brand-dark mb-1 px-1">Product name goes here</h1>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3 px-1">
            <span className="text-[#eb001b] font-bold text-lg">$129.95</span>
            <span className="text-xs text-brand-gray">(50-100 pcs)</span>
          </div>

          {/* Send inquiry + heart */}
          <div className="flex gap-2 mb-4 px-1">
            <button className="flex-1 bg-brand-blue hover:bg-blue-700 text-white rounded-lg py-3 font-semibold text-sm cursor-pointer transition-colors">Send inquiry</button>
            <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-50 transition-colors bg-white">
              <Heart size={20} className="text-brand-blue" />
            </button>
          </div>

          {/* Attributes */}
          <div className="flex flex-col gap-2.5 text-sm px-1 mb-4">
            {[{k:'Condition',v:'Brand new'},{k:'Material',v:'Plastic'},{k:'Category',v:'Electronics, gadgets'},{k:'Item num',v:'23421'}].map((a,i) => (
              <div key={i} className="flex"><span className="w-24 flex-shrink-0 text-brand-gray">{a.k}</span><span className="text-brand-dark">{a.v}</span></div>
            ))}
          </div>

          {/* Description */}
          <div className="text-sm text-brand-gray leading-relaxed mb-2 px-1">
            Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...
          </div>
          <span className="text-brand-blue font-semibold text-sm cursor-pointer px-1 mb-5 block">Read more</span>

          {/* Mobile Supplier Card (combining info and badges) */}
          <div className="border border-gray-200 rounded-lg mx-1 mb-6 bg-white overflow-hidden">
            {/* Info */}
            <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-11 h-11 bg-[#c5f2f2] text-[#4ca2a2] rounded-md font-bold text-xl flex items-center justify-center flex-shrink-0">R</div>
              <div className="flex-1">
                <span className="block text-[11px] text-brand-gray">Supplier</span>
                <span className="text-sm font-semibold text-brand-dark">Guanjoi Trading LLC</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
            
            {/* Divider line */}
            <hr className="border-gray-200 mx-4" />

            {/* Badges */}
            <div className="px-4 py-3.5 flex flex-wrap items-center gap-4 text-xs text-brand-gray select-none bg-white">
              <span className="flex items-center gap-1"><img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-5"/> Germany</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-gray-400"/> Verified</span>
              <span className="flex items-center gap-1"><Globe size={14} className="text-gray-400"/> Shipping</span>
            </div>
          </div>

          {/* Similar products */}
          <div className="mb-6">
            <h2 className="text-base font-bold text-brand-dark mb-3 px-1">Similar products</h2>
            <div className="flex overflow-x-auto no-scrollbar gap-3 px-1 pb-2">
              {relatedProducts.map((p) => (
                <div key={p.id} className="bg-white border border-gray-200 rounded-md p-3 flex-shrink-0 w-[150px] cursor-pointer" onClick={() => onNavigate('product-details')}>
                  <img src={p.img} alt={p.title} className="w-full h-24 object-contain mb-2" />
                  <p className="font-bold text-sm mb-0.5">{p.price}</p>
                  <p className="text-brand-gray text-xs line-clamp-2">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====== DESKTOP PRODUCT INFO BLOCK ====== */}
        <div className="bg-white border border-gray-200 rounded-md p-6 mb-6 shadow-sm hidden md:block">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column: Image Gallery (Span 5) */}
            <div className="col-span-12 md:col-span-5 flex flex-col">
              {/* Big active preview */}
              <div className="h-[250px] md:h-[380px] w-full border border-gray-200 rounded-md flex items-center justify-center p-4 bg-white relative overflow-hidden select-none">
                <img 
                  src={activeImage} 
                  alt="Active product view" 
                  className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105" 
                />
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-6 gap-2 mt-3 select-none">
                {thumbnails.map((thumb, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`h-[56px] border rounded-md flex items-center justify-center p-1 cursor-pointer bg-white transition-all overflow-hidden ${
                      activeImage === thumb ? 'border-brand-blue border-2 shadow-sm' : 'border-gray-200 hover:border-brand-blue'
                    }`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column: Details (Span 4) */}
            <div className="col-span-12 md:col-span-4 flex flex-col">
              {/* Stock status */}
              <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm mb-2 select-none">
                <Check size={16} />
                <span>In stock</span>
              </div>

              {/* Product Title */}
              <h1 className="text-lg md:text-xl font-bold leading-tight text-brand-dark mb-3">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h1>

              {/* Reviews & Orders */}
              <div className="flex items-center gap-4 text-xs select-none mb-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star 
                      key={sIdx} 
                      size={14} 
                      className={sIdx < 4 ? 'text-[#ff9017] fill-[#ff9017]' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-[#ff9017] font-bold ml-1.5">9.3</span>
                </div>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <div className="flex items-center gap-1.5 text-brand-gray">
                  <MessageSquare size={13} />
                  <span>32 reviews</span>
                </div>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <div className="flex items-center gap-1.5 text-brand-gray">
                  <ShoppingBag size={13} />
                  <span>154 sold</span>
                </div>
              </div>

              {/* Pricing peach container */}
              <div className="bg-[#fff0df] rounded-md p-4 flex justify-between select-none mb-5">
                <div className="flex-1">
                  <span className="block text-[#eb001b] font-bold text-lg leading-tight">$98.00</span>
                  <span className="text-[11px] text-brand-gray mt-1 block">50-100 pcs</span>
                </div>
                <div className="w-px bg-gray-200 self-stretch mx-3"></div>
                <div className="flex-1">
                  <span className="block text-brand-dark font-bold text-base leading-tight">$90.00</span>
                  <span className="text-[11px] text-brand-gray mt-1 block">100-700 pcs</span>
                </div>
                <div className="w-px bg-gray-200 self-stretch mx-3"></div>
                <div className="flex-1">
                  <span className="block text-brand-dark font-bold text-base leading-tight">$78.00</span>
                  <span className="text-[11px] text-brand-gray mt-1 block">700+ pcs</span>
                </div>
              </div>

              {/* Attributes table */}
              <div className="flex flex-col gap-3 text-sm text-brand-dark select-none">
                <div className="flex items-baseline">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Price:</span>
                  <span className="text-brand-dark">Negotiable</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Type:</span>
                  <span className="text-brand-dark">Classic shoes</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Material:</span>
                  <span className="text-brand-dark">Plastic material</span>
                </div>
                <div className="flex items-baseline pb-3 border-b border-gray-100">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Design:</span>
                  <span className="text-brand-dark">Modern nice</span>
                </div>

                <div className="flex items-baseline mt-2">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Customization:</span>
                  <span className="text-brand-dark">Customized logo and design custom packages</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Protection:</span>
                  <span className="text-brand-dark">Refund Policy</span>
                </div>
                <div className="flex items-baseline">
                  <span className="w-32 flex-shrink-0 text-brand-gray">Warranty:</span>
                  <span className="text-brand-dark">2 years full warranty</span>
                </div>
              </div>
            </div>

            {/* Right Column: Supplier Info Card & Main Action Buttons (Span 3) */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-4 select-none">
              
              {/* Supplier Info box */}
              <div className="border border-gray-200 rounded-md p-4 flex flex-col gap-4 bg-white shadow-sm">
                {/* Header row */}
                <div className="flex gap-3 items-center">
                  <div className="w-11 h-11 bg-[#c5f2f2] text-[#4ca2a2] rounded-md font-bold text-xl flex items-center justify-center">
                    R
                  </div>
                  <div>
                    <span className="block text-[11px] text-brand-gray">Supplier</span>
                    <span className="text-sm font-semibold text-brand-dark">Guanjoi Trading LLC</span>
                  </div>
                </div>
                
                <hr className="border-gray-100" />
                
                {/* Contact properties */}
                <div className="flex flex-col gap-2.5 text-xs text-brand-gray">
                  <div className="flex items-center gap-2">
                    <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5 h-auto object-cover rounded-sm" />
                    <span>Germany, Berlin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-[#a5b2c7]" />
                    <span>Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#a5b2c7]" />
                    <span>Worldwide shipping</span>
                  </div>
                </div>

                {/* Primary Button Options */}
                <button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md py-2.5 font-semibold text-sm shadow-sm transition-colors text-center cursor-pointer">
                  Send inquiry
                </button>
                <button className="border border-gray-300 hover:border-brand-blue text-brand-blue rounded-md py-2.5 font-semibold text-sm shadow-sm transition-colors text-center cursor-pointer bg-white">
                  Seller's profile
                </button>
              </div>

              {/* Heart save */}
              <div className="flex items-center justify-center gap-2 text-brand-blue font-bold text-sm hover:underline cursor-pointer py-1.5 transition-colors">
                <Heart size={16} />
                <span>Save for later</span>
              </div>
            </div>

          </div>
        </div>

        {/* Details Bottom Block: Description + Recommended (Sidebar) - desktop only */}
        <div className="hidden md:grid grid-cols-12 gap-6 mb-6">
          
          {/* Main Description Column (Span 9) */}
          <div className="col-span-12 lg:col-span-9 flex flex-col bg-white border border-gray-200 rounded-md p-6 shadow-sm">
            {/* Tabs Bar */}
            <div className="flex border-b border-gray-200 mb-6 select-none overflow-x-auto no-scrollbar">
              {['description', 'reviews', 'shipping', 'about seller'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-5 py-3 text-xs md:text-sm font-semibold capitalize transition-all border-b-2 -mb-px whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    activeTab === tab 
                      ? 'border-brand-blue text-brand-blue' 
                      : 'border-transparent text-brand-gray hover:text-brand-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Description Tab Body */}
            {activeTab === 'description' && (
              <div className="flex flex-col gap-6">
                <div className="text-brand-gray text-sm leading-relaxed flex flex-col gap-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                  </p>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                {/* Specs Table */}
                <div className="max-w-[560px] border border-gray-200 rounded-md overflow-hidden text-sm">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="flex border-b border-gray-200 last:border-0">
                      <div className="w-[180px] bg-gray-50 text-brand-gray p-3 font-medium border-r border-gray-200 select-none">
                        {spec.name}
                      </div>
                      <div className="flex-1 p-3 text-brand-dark font-medium">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullets List */}
                <div className="flex flex-col gap-2.5 text-sm text-brand-gray">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Check size={16} className="text-gray-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs placeholders */}
            {activeTab !== 'description' && (
              <div className="text-brand-gray text-sm py-8 text-center italic select-none">
                Additional information about {activeTab} will be pulled dynamically from database.
              </div>
            )}
          </div>

          {/* Right Sidebar: "You may like" (Span 3) */}
          <div className="col-span-12 lg:col-span-3 flex flex-col bg-white border border-gray-200 rounded-md p-4 shadow-sm h-fit">
            <h3 className="font-bold text-base text-brand-dark mb-4 select-none">
              You may like
            </h3>
            <div className="flex flex-col gap-4">
              {youMayLike.map((item) => (
                <div key={item.id} className="flex gap-3 items-center group cursor-pointer" onClick={() => onNavigate('product-details')}>
                  {/* Thumbnail box */}
                  <div className="w-[80px] h-[80px] border border-gray-100 rounded-md flex items-center justify-center p-1.5 flex-shrink-0 bg-white overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                        item.img === tech7 ? 'scale-[1.3]' : ''
                      }`} 
                    />
                  </div>
                  {/* Info details */}
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-brand-dark line-clamp-2 leading-tight group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs text-brand-gray mt-1 block font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Related Products Grid Block - desktop only */}
        <div className="bg-white border border-gray-200 rounded-md p-6 mb-6 shadow-sm hidden md:block">
          <h2 className="font-bold text-lg text-brand-dark mb-5 select-none">
            Related products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {relatedProducts.map((p) => (
              <div 
                key={p.id} 
                className="flex flex-col group cursor-pointer select-none"
                onClick={() => onNavigate('product-details')}
              >
                {/* Image wrapper */}
                <div className="h-[140px] border border-gray-100 rounded-md flex items-center justify-center p-3 mb-3 bg-white overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className={`max-h-[90%] max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-110 ${
                      p.img === tech7 ? 'scale-[1.35]' : 
                      p.img === tech8 ? 'scale-[1.35]' :
                      p.img === tech4 ? 'scale-[1.35]' : ''
                    }`} 
                  />
                </div>
                {/* Details */}
                <h4 className="text-sm text-brand-gray group-hover:text-brand-blue transition-colors leading-snug line-clamp-2">
                  {p.title}
                </h4>
                <span className="text-sm font-semibold text-brand-gray mt-1">
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vibrant Blue Promo Banner */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-md p-5 md:p-7 text-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 shadow-md relative overflow-hidden select-none hidden md:flex">
          <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-white opacity-[0.03] transform skew-x-12"></div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight">Super discount on more than 100 USD</h2>
            <p className="text-white opacity-85 text-sm mt-1.5">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-[#ff9017] hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-md transition-colors shadow-md flex-shrink-0 cursor-pointer">Shop now</button>
        </div>

      </div>
    </main>
  );
};

export default ProductDetails;

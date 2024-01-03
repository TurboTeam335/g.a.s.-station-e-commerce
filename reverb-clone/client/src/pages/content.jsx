import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import ProductListingPage from './ProductListing/ProductListingPage';
import ProductDetail from './ProductDetail/ProductDetail';
import AboutUS from './AboutUs/AboutUs';
import Login from '../pages/Login/index';
import Wishlist from './Wishlist/Wishlist';
import Contact from './Contact/Contact';
import Sell from './Sell/Sell';
import Cart from './Cart/Cart';

const Content = () => {
  return (
    <div className='content-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/guitars'
          element={<ProductListingPage category='GUITARS' />}
        />
        <Route
          path='/amplifiers'
          element={<ProductListingPage category='AMPLIFIERS' />}
        />
        <Route
          path='/pedals'
          element={<ProductListingPage category='PEDALS' />}
        />
        <Route path='/products/:sku' element={<ProductDetail />} />{' '}
        {/* Added this line */}
        <Route path='/login' element={<Login />} /> 
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/about-us' element={<AboutUS />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Content;

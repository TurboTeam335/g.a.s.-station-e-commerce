import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import ProductListingPage from './ProductListing/ProductListingPage';
import ProductDetail from './ProductDetail/ProductDetail';
// ... other imports
import Login from '../pages/Login/index';

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
        <Route path='/login' element={<Login />} /> {/* Added this line */}
        {/* Add any other routes as needed */}
      </Routes>
    </div>
  );
};

export default Content;

import React from 'react';
import fakeGuitars from '../../../data/fakeGuitars';
import fakeAmplifiers from '../../../data/fakeAmplifiers ';
import fakePedals from '../../../data/fakePedals';
import ProductCard from '../../ProductListing/ProductCard';
import './RecentlyViewed.css';

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = React.useState([]);

  React.useEffect(() => {
    const recentlyViewedSKUs = JSON.parse(
      localStorage.getItem('recentlyViewed') || '[]'
    );
    const allProducts = [...fakeGuitars, ...fakeAmplifiers, ...fakePedals];
    const recentlyViewedProducts = recentlyViewedSKUs.map(sku =>
      allProducts.find(p => p.SKU === sku)
    );
    setRecentProducts(recentlyViewedProducts);
  }, []);
  return (
    <div className='recently-viewed-container'>
      <div className='recently-title'>
        <p>Recently Viewed</p>
      </div>

      <div className='product-card-storage'>
        {recentProducts.map(product => (
          <ProductCard key={product.SKU} product={product} className='recent' />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;

import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import fakeGuitars from '../../data/fakeGuitars';
import fakeAmplifiers from '../../data/fakeAmplifiers ';
import fakePedals from '../../data/fakePedals';
import ProductDetailImage from './ProductImage/ProductDetailImage';
import ProductDetailTitle from './ProductTitle/ProductDetailTitle';
import NewProduct from './ShopLatest/NewProduct';
import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
import ProductDescription from './ProductDescription/ProductDescription';
import './ProductDetail.css';

const ProductDetail = () => {
  const { sku } = useParams();
  const allProducts = [...fakeGuitars, ...fakeAmplifiers, ...fakePedals];
  const product = allProducts.find(p => p.SKU === sku);

  useEffect(() => {
    const recentlyViewed = localStorage.getItem('recentlyViewed') 
      ? JSON.parse(localStorage.getItem('recentlyViewed')) 
      : [];
  
    if (!recentlyViewed.includes(sku)) {
      if (recentlyViewed.length === 5) {
        // Remove the oldest product if we've reached the maximum
        recentlyViewed.shift();
      }
  
      recentlyViewed.push(sku);
      localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
  }, [sku]);
  
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='product-detail-container'>
      <div className="horizontal-container">
        <div className="left-container">
          <ProductDetailImage product={product} />
          <ProductDescription product={product} />
        </div>
        <div className="right-container">
          <ProductDetailTitle product={product} />
          <NewProduct />
        </div>
      </div>
      <RecentlyViewed />
    </div>
  );
};


export default ProductDetail;

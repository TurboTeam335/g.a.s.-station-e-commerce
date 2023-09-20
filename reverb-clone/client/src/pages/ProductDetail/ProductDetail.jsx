import React from 'react';
import { useParams } from 'react-router-dom';
import fakeGuitars from '../../data/fakeGuitars';
import fakeAmplifiers from '../../data/fakeAmplifiers ';
import fakePedals from '../../data/fakePedals';
import ProductDetailImage from './ProductDetailImage';
import ProductDetailTitle from './ProductDetailTitle';
import NewProduct from './NewProduct';
import './ProductDetail.css';

const ProductDetail = () => {
  const { sku } = useParams();
  const allProducts = [...fakeGuitars, ...fakeAmplifiers, ...fakePedals];
  const product = allProducts.find(p => p.SKU === sku);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='product-detail-container'>
      <ProductDetailImage product={product} />
      <div className="right-container">
        <ProductDetailTitle product={product} />
        <NewProduct />
      </div>
    </div>
  );
};

export default ProductDetail;

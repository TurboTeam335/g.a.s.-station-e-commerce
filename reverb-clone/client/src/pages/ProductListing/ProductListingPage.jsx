import React, { useState, useEffect } from 'react';
import SortFilter from './SortFilter';
import ProductCard from './ProductCard';
import fakeGuitars from '../../data/fakeGuitars';
import fakeAmplifiers from '../../data/fakeAmplifiers ';
import fakePedals from '../../data/fakePedals';
import Pagination from './Pagination';
import './ProductListingPage.css';

const ProductListingPage = ({ category }) => {
  let productsData;
  switch (category) {
    case 'GUITARS':
      productsData = fakeGuitars;
      break;
    case 'AMPLIFIERS':
      productsData = fakeAmplifiers;
      break;
    case 'PEDALS':
      productsData = fakePedals;
      break;
    default:
      productsData = []; // or any other default
  }
  const [sortedProducts, setSortedProducts] = useState(productsData);
  
  useEffect(() => {
    setSortedProducts(productsData);
  }, [productsData]);

  const handleSortChange = sortType => {
    let sortedData = [...productsData]; // clone the array to avoid mutating the original data

    switch (sortType) {
      case 'Newest - Oldest':
        sortedData.sort((a, b) => b.year - a.year);
        break;
      case 'Oldest - Newest':
        sortedData.sort((a, b) => a.year - b.year);
        break;
      case 'Alphabetical A-Z':
        sortedData.sort((a, b) => a.Brand.localeCompare(b.Brand));
        break;
      case 'Alphabetical Z-A':
        sortedData.sort((a, b) => b.Brand.localeCompare(a.Brand));
        break;
      case 'Price High-Low':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'Price Low-High':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setSortedProducts(sortedData);
  };

  return (
    <div>
      <div className='product-header'></div>
      <div className='product-title'>
        <h1>{category}</h1>
        <div className='divider'></div>
      </div>
      <div className='product-container'>
        <SortFilter onSortChange={handleSortChange} />

        <div className='box-divider'></div>

        <div className='product-listing-container'>
          {sortedProducts.map(product => (
            <ProductCard key={product.SKU} product={product} />
          ))}
        </div>

        <div className='pagination-wrapper'>
          <div className='box-divider'></div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;

import React from "react";
import SortFilter from "./SortFilter";
import ProductCard from "./ProductCard";
import fakeGuitars from "../../data/fakeGuitars";
import fakeAmplifiers from "../../data/fakeAmplifiers ";
import fakePedals from "../../data/fakePedals";

import Pagination from "./Pagination";
import './ProductListingPage.css'

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

  return (
    <div>
      <div className="product-header"></div>
      <div className="product-title">
        <h1>{category}</h1>
        <div className="divider"></div>
      </div>
      <div className="product-container">
      
          <SortFilter />
          <div className="box-divider"></div>
    
      
          <div className="product-listing-container">
      {productsData.map(product => (
        <ProductCard key={product.SKU} product={product} />
      ))}
    </div>

<div className="pagination-wrapper">
          <div className="box-divider"></div>
          <Pagination />
      </div>
      </div>
    </div>
  );
}

export default ProductListingPage

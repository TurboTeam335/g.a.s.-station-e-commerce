import React from 'react';
import '../ProductInfo/ProductInfo.css';
import './Review.css';

const Review = ({ data, setCurrentStep }) => {
  return (
    <div className='review-container'>
      <div className='info-box'>
        <div className='header-review'>
          Product Info{' '}
          <button className='edit-btn'>
            <i className='fas fa-pencil-alt'></i>
          </button>
        </div>
        <div className="box-divider"></div>
        <div className='content'>
          <div className='row'>
            <span className='label'>Brand:</span>{' '}
            <span className='value'>{data.Brand}</span>
          </div>
          <div className='row'>
            <span className='label'>Model:</span>{' '}
            <span className='value'>{data.Model}</span>
          </div>
          <div className='row'>
            <span className='label'>Year:</span>{' '}
            <span className='value'>{data.year}</span>
          </div>
          <div className='row'>
            <span className='label'>Finish:</span>{' '}
            <span className='value'>{data.finish}</span>
          </div>
          <div className='row'>
            <span className='label'>Listing Title:</span>{' '}
            <span className='value'>{data.ListingTitle}</span>
          </div>
          <div className='row'>
            <span className='label'>Category:</span>{' '}
            <span className='value'>{data.category}</span>
          </div>
          <div className='row'>
            <span className='label'>Subcategory:</span>{' '}
            <span className='value'>{data.subcategory}</span>
          </div>
          {data.type === 'Guitars' && (
            <>
              <div className='row'>
                <span className='label'>Right / Left Handed:</span>{' '}
                <span className='value'>{data.handedness}</span>
              </div>
              <div className='row'>
                <span className='label'>Electronics:</span>{' '}
                <span className='value'>{data.electronics}</span>
              </div>
              <div className='row'>
                <span className='label'>Nut Width</span>{' '}
                <span className='value'>{data.nutWidth}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className='info-box'>
        <div className='header-review'>
          Photo & Description{' '}
          <button className='edit-btn'>
            <i className='fas fa-pencil-alt'></i>
          </button>
        </div>
        <div className="box-divider"></div>
        <div className='content'>
          <div className='photo-section'>
            {/*... Placeholder for photo ...*/}
          </div>
          <div className='row'>
            <span className='label'>Condition:</span>{' '}
            <span className='value'>{data.Condition}</span>
          </div>
          <div className='row'>
            <span className='label'>Description:</span>{' '}
            <span className='value'>{data.Description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

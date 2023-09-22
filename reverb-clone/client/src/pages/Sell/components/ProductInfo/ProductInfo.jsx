// ProductInfo/ProductInfo.jsx
import React, { useState, useEffect } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ data, setData }) => {
  const [localData, setLocalData] = useState(data);
  const [errors, setErrors] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Guitars', 'Amplifiers', 'Effects and Pedals'];

  const subcategories = {
    Guitars: ['Acoustic Guitars', 'Bass Guitars', 'Electric Guitars', 'Other'],
    Amplifiers: [
      'Acoustic Amps',
      'Bass Cabinets',
      'Bass Combos',
      'Bass Heads',
      'Guitar Cabinets',
      'Guitar Combos',
      'Guitar Heads',
      'Modeling Amps',
      'Other',
    ],
    'Effects and Pedals': [
      'Amp Modeling',
      'Bass Pedals',
      'Buffer',
      'Cab Sims',
      'Chorus and Vibrato',
      'Compression and Sustain',
      'Controllers, Volume and Expression',
      'Delay',
      'Distortion',
      'EQ',
      'Flange',
      'Fuzz',
      'Loop',
      'Multi-Effect',
      'Octave and Pitch',
      'Overdrive and Boost',
      'Phase Shifter',
      'Preamps',
      'Reverb',
      'Ring Modulators',
      'Tremolo',
      'Tuning',
      'Wah',
      'Other',
    ],
  };

  useEffect(() => {
    setData(localData);
  }, [localData, setData]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLocalData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!localData.Brand) {
      tempErrors.Brand = 'Brand is required';
    }
    if (!localData.Model) {
      tempErrors.Model = 'Model is required';
    }
    if (!localData.ListingTitle) {
      tempErrors.ListingTitle = 'Listing Title is required';
    }
    if (!localData.type || localData.type === '') {
      tempErrors.type = 'Category is required';
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Only proceed if validation is successful
    if (validate()) {
      // Handle successful submission, e.g., move to next page
      console.log('Validated data:', localData);
    }
  };

  return (
    <div className='product-info-wrapper'>
      <h2>Product Information</h2>
      <div className='input-container'>
        <form>
          <label for='inputId'>Brand*:</label>
          <input
            type='text'
            name='Brand'
            value={localData.Brand || ''}
            onChange={handleInputChange}
            required
          />
          {errors.Brand && <div className='error'>{errors.Brand}</div>}

          <label for='inputId'>Model*:</label>
          <input
            type='text'
            name='Model'
            value={localData.Model || ''}
            onChange={handleInputChange}
            required
          />
          {errors.Model && <div className='error'>{errors.Model}</div>}

          <label for='inputId'>Year:</label>
          <input
            type='number'
            name='year'
            value={localData.year || ''}
            onChange={handleInputChange}
          />

          <label for='inputId'>Finish:</label>
          <input
            type='text'
            name='finish'
            value={localData.finish || ''}
            onChange={handleInputChange}
          />

          <label for='inputId'>Listing Title*:</label>
          <input
            type='text'
            name='ListingTitle'
            value={localData.ListingTitle || ''}
            onChange={handleInputChange}
            required
          />
          {errors.ListingTitle && (
            <div className='error'>{errors.ListingTitle}</div>
          )}

          <label for='inputId'>Category*:</label>
          <select
            name='type'
            value={localData.type || ''}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.type && <div className='error'>{errors.type}</div>}

          {localData.type && (
            <label for='inputId'>
              Subcategory:
              <select
                name='subcategory'
                value={localData.subcategory || ''}
                onChange={handleInputChange}
              >
                <option value=''>Select a subcategory</option>
                {subcategories[localData.type].map(sub => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </label>
          )}
          {localData.type === 'Guitars' && (
            <>
              <label for='rightLeftHanded'>Right / Left Handed:</label>
<select
                  name='rightLeftHanded'
                  value={localData.handedness || ''}
                  onChange={handleInputChange}
                >
                  <option value='right'>Right Handed</option>
                  <option value='left'>Left Handed</option>
                </select>
     

              <label for='electronics'>
                Electronics:</label>
                <input
                  type='text'
                  name='electronics'
                  value={localData.electronics || ''}
                  onChange={handleInputChange}
                />
              

              <label for='nutWidth'>
                Nut Width:</label>
                <input
                  type='text'
                  name='nutWidth'
                  value={localData.nutWidth || ''}
                  onChange={handleInputChange}
                />
              
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;

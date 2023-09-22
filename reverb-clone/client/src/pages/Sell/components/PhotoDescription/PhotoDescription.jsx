import React, { useState } from 'react';
import '../ProductInfo/ProductInfo.css'; 

const PhotoDescription = ({ data, setData }) => {
  const [localData, setLocalData] = useState(data);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Basic error handling
    if (name === "description" && value.length > 500) {
      setErrors(prev => ({
        ...prev,
        description: "Description exceeds 500 characters."
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        description: null
      }));
    }

    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const conditions = ['Brand New', 'Mint', 'Excellent', 'Very Good', 'Good', 'Fair', 'Poor', 'Not Functioning'];

  return (
    <div className='product-info-wrapper'>
      <h2>Photo & Description</h2>
      <div className='input-container'>
        <label>
          Upload Photo:
          <input type='file' name='photo' />
        </label>
        
        <label htmlFor='description'>
          Description*:
          <textarea
            name='description'
            value={data.description || ''}
            onChange={handleInputChange}
            required
          />
        </label>
        {errors.description && <div className='error'>{errors.description}</div>}
        
        <label htmlFor='inputId'>Condition</label>
        <select
  name='condition'
  value={localData.condition || ''}
  onChange={handleInputChange}
  required
>
<option value=''>Select...</option>
{conditions.map(condition => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>

        <label htmlFor='sku'>
          SKU:
          <input
            type='text'
            name='sku'
            value={data.sku || ''}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
}

export default PhotoDescription;

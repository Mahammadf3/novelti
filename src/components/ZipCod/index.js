import React, { useState } from 'react';

import "./index.css"

const ZipCodeInput = (props) => {
  const {activeZip}=props
  const [zipCode, setZipCode] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleZipCodeChange = (e) => {
    const newZipCode = e.target.value;
    setZipCode(newZipCode);

   
    const zipCodeRegex = /^\d{6}$/; 
    const isValidZipCode = zipCodeRegex.test(newZipCode);

    setIsValid(isValidZipCode);
    activeZip(newZipCode)
  };

  return (
    <div className="zipContainer">
      <label htmlFor='zipCode'>Zip Code:</label>
      <input id="zipCode"
        type="text"
        value={zipCode}
        onChange={handleZipCodeChange}
        placeholder="Enter zip code"
        className="zipData"
      />
      {!isValid && <p style={{ color: 'red' }}>Invalid zip code</p>}
    </div>
  );
};

export default ZipCodeInput;

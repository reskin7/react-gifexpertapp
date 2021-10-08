import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, setQuantity }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const clearAll = () => {
    setCategories([]);
    console.log('Se disparooo');
  };

  return (
    <div
      style={{
        // display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <br />
        <br />
        <label htmlFor="quantity">
          Selecciona la cantidad de imagenes que quieres traer {'\n \n'}
        </label>
        <select name="selector" id="quantity" onChange={handleQuantity}>
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </form>
      <button style={{ marginTop: 'auto' }} onClick={clearAll}>
        Clear all
      </button>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

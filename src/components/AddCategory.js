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

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

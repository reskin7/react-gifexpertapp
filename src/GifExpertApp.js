import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Overwatch']);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} setQuantity={setQuantity} />
      <hr />

      <ol>
        {categories.map((cats) => (
          <GifGrid key={cats} category={cats} quantity={quantity} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

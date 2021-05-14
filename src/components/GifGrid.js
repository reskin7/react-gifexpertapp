import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, quantity }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category, quantity); // "data: images" es para renombrar...."data" lo voy a poder usar como si fuera una variable de nombre "images"

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

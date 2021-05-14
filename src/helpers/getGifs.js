export const getGifs = async (category, quantity) => {
  const api_key = 'jIe1oFlypL5uXVad4v7jCehc8FiVSDMF';

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${quantity}&api_key=${api_key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

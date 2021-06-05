import { getGifs } from '../../helpers/getGifs';

describe('Test en la funcion de getGifs', () => {
  test('debe de traer X elementos ', async () => {
    const X = 5;

    const gifs = await getGifs('Overwatch', X);

    expect(gifs.length).toBe(X);
  });

  test('No se le envia categoria, debe retornar arreglo vacio', async () => {
    const X = 5;
    const gifs = await getGifs('', X);

    expect(gifs.length).toBe(0);
  });
});

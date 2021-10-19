import { useCallback, useEffect, useState } from 'react';
import ProductTile from './ProductTile';

const baseUrl = 'https://swapi.dev/api/vehicles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [busy, setBusy] = useState(true);

  // recipe
  const fetchProducts = useCallback(() => {
    setBusy(true);

    return fetch(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = data.results;

        setProducts(products);
        setBusy(false);
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // end recipe

  return (
    <section className="row">
      <div className="col-12 mb-6">
        <h2>Available Listings</h2>
      </div>

      {products.map((product) => {
        const { name } = product;

        return <ProductTile product={product} key={name}></ProductTile>;
      })}

      {busy ? '...loading' : <></>}
    </section>
  );
};

export default Products;

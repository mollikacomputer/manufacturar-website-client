import React, { useEffect, useState } from "react";
import Product from "./Product";
import fetcher from "../api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetcher.get("/products").then((res) => setProducts(res.data));
  }, []);

  console.log(products);

  return (
    <div>
        <h2 className="text-5xl text-primary flex justify-center items-center">
          Total Product {products.length}
        </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {products.map((product) => (
          <Product key={product.id} product={product}>
          </Product>
        ))}
      </div>
    </div>
  );
};
export default AllProducts;

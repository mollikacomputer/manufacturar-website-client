import React, { useEffect, useState } from "react";
import fetcher from "../api";
import Product from "../Components/Product";
import AddProduct from "./AddProduct";

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetcher.get("/products").then((res) => setProducts(res.data));
  }, []);
  // console.log(products);
  return (
    <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>picture</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
          </thead>
          
            {/* <!-- row 1 --> */}
            
            {
                products.map( product => <AddProduct
                key = {product.id}
                product = {product}
                >
                </AddProduct>)
            }
     </table>
    </div>
  );
};

export default AddProducts;

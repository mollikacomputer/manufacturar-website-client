import React, { useEffect, useState } from "react";
import fetcher from "../api";
import ManageProduct from "./ManageProduct";


const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products/')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleDeleteProduct = id =>{
    const proceed = window.confirm('Are you sure you want to delete Product?');
    if(proceed){
      console.log('deleting product with id', id);
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then( res => res.json())
      .then( data => {
        if(data.deletedCount > 0){
          console.log('deleted');
          const remaining = products.filter( product => product._id !== id );
          setProducts(remaining);
        }
      } )
    }
  }
  // console.log(products);
  return (
    <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>picture</th>
              <th>Price</th>
              {/* <th>Name</th> */}
              <th>Available</th>
              <th>Min Order</th>
              <th>Edit</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
          </thead>
          
            {/* <!-- row 1 --> */}
            {
                products.map( product => <ManageProduct
                key = {product._id}
                product = {product}
                handleDeleteProduct ={handleDeleteProduct}
                >
                </ManageProduct>)
            }
     </table>
    </div>
  );
};

export default ManageProducts;

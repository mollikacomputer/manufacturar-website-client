import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, description, minimumOrderQty, availableQty, picture } =
    product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <span>Minimum Order Quantity <span class="badge badge-primary badge-lg"> {minimumOrderQty}</span> </span>
        <span> Available Quantity <span class="badge badge-primary badge-lg"> {availableQty} </span></span>
        <h2 className="card-title">Price $ <span class="badge badge-primary badge-lg">{price} </span></h2>
        <p>{description.slice(0,150)} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">  Buy Now  </button>
          <Link to="/persage" >Persage</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

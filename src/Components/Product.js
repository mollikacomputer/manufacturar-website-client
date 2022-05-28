import React from "react";

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
        <span>Price $ <span class="badge badge-primary badge-lg">{price} </span></span>
        <p>{description} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

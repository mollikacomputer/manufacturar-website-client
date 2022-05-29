import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddNewProduct = () => {

  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const picture = event.target.picture.value;
    const orderQty = event.target.orderQty.value;
    const minimumOrderQty = event.target.minimumOrderQty.value;
    const availableQty = event.target.availableQty.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const productInfo = {
      name,
      picture,
      orderQty,
      minimumOrderQty,
      availableQty,
      description,
      price,
    };

    fetch("https://ancient-ocean-03919.herokuapp.com/products", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
      .then( res => res.json())
      .then( data => {
        console.log("successfully", data);
        toast("successfully adding new data to server", data);
        event.target.reset();
      });
  };

  return (
    <div class="h-screen flex justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddProduct} class="card-body">
          <h2 className="text-3xl text-primary"> Add New product</h2>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            class="input input-bordered"
          />
          <input
            type="text"
            name="picture"
            placeholder="image url"
            class="input input-bordered"
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            class="input input-bordered"
          />
          <input
            type="number"
            name="minimumOrderQty"
            placeholder="Minimum Order Quantity"
            class="input input-bordered"
          />
          <input
            type="number"
            name="orderQty"
            placeholder="order Qty"
            class="input input-bordered"
          />
          <input
            type="number"
            name="availableQty"
            placeholder="Available Quantity"
            class="input input-bordered"
          />
          <textarea
            name="description"
            class="textarea textarea-bordered h-24"
            placeholder="description"
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary text-white"
            value="Add Product"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddNewProduct;

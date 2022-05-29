import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, []);

  const handleProductUpdate = (event) => {
    
    event.preventDefault();
    const name = event.target.name.value;
    const picture = event.target.picture.value;
    const orderQty = event.target.orderQty.value;
    const minimumOrderQty = event.target.minimumOrderQty.value;
    const availableQty = event.target.availableQty.value;
    const description = event.target.description.value;
    const price = event.target.price.value;

    const updateProductInfo = {
      name,
      picture,
      orderQty,
      minimumOrderQty,
      availableQty,
      description,
      price,
    };

    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json", /// have some problem
      },
      body: JSON.stringify(updateProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("successfully updating product to server", data);
        event.target.reset();
      });
  };

  return (
    <div class="h-screen flex justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleProductUpdate} class="card-body">
          <h2 className="text-2xl text-primary"> Updating Product : {product.name} </h2>
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

export default UpdateProduct;

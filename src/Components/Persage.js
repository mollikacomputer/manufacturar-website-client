import React from "react";

const Persage = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content grid lg:flex-row-reverse">
      <input type="text" placeholder="Full Name" class="input input-bordered w-full input-" />
      <input type="email" placeholder="email" class="input input-bordered w-full input-" />
      <input type="number" placeholder="phone" class="input input-bordered w-full input-" />
      <input type="text" placeholder="Product Name" class="input input-bordered w-full input-" />
      <input type="submit" value="submit" class="btn  btn-secondary" />
      <input value="cancel"  class="btn  btn-primary" />
      </div>
    </div>
  );
};

export default Persage;

import React from "react";

const SingleBlog = ({bInfo}) => {
    const {title, description} = bInfo;
  return (
    <div class="card w-lg bg-base-100 shadow-xl">
      
      <div class="card-body">

        <h2 class="card-title"> {title} </h2>
        <p>{description}</p>

      </div>
    </div>
    
  );
};

export default SingleBlog;

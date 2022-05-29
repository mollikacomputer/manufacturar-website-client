import React from "react";
import People1 from "../../src/Assets/images/people1.png";
import People2 from "../../src/Assets/images/people2.png";
import People3 from "../../src/Assets/images/people3.png";
const Comments = () => {
  return (

    <div>
      <span className="flex justify-center items-center" >
      <h2 className="text-5xl text-primary"> Public reaction</h2>
      </span>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
      <div class="card bg-base-100 shadow-xl p-4">
        <div>
          <p className="text-left">
           Seat Belt is awesome i can buy from again when we need.
          </p>
        </div>
        <div className="flex">
          <div class="avatar my-8">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={People2} alt="people3" />
            </div>
          </div>
          <div class="card-body text-left align-middle">
            <h2 class="card-title"> Mr. Williams Henry</h2>
            <p> Austin, Texas </p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl p-4">
        <div>
          <p className="text-left">
            Good job and product. Delivery time and management and product is awesome. come back again
          </p>
        </div>
        <div className="flex">
          <div class="avatar my-8">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={People3} alt="people3" />
            </div>
          </div>
          <div class="card-body text-left align-middle">
            <h2 class="card-title"> Mr. Williams Henry</h2>
            <p> Dallas, Texas </p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl p-4">
        <div>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            nostrum.
          </p>
        </div>
        <div className="flex">
          <div class="avatar my-8">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={People1} alt="people1" />
            </div>
          </div>
          <div class="card-body text-left align-middle">
            <h2 class="card-title"> Mr. Williams Henry</h2>
            <p> San francisco, Ca </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Comments;

import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        data-aos="flip-left"
        data-aos-offset="200"
          data-aos-delay="2000"
          data-aos-duration="1000"

          src="https://api.lorem.space/image/movie?w=260&h=400"
          className="max-w-sm rounded-lg shadow-2xl" alt="banner-img"
        />
        <div>
          <h1 
          data-aos="fade-right" 
          className="text-5xl font-bold"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="1000"

          >Box Office News!</h1>
          <p 
          data-aos="fade-left" 
          className="py-6"
          data-aos-offset="200"
          data-aos-delay="600"
          data-aos-duration="2000"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button data-aos="zoom-in-down" className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

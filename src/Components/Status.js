import React from "react";
import SingleStatus from "./SingleStatus";

const Status = () => {
  const statusInfo = [
    {
      id: 0,
      icon: `https://i.ibb.co/fpyrSgd/flag.jpg`,
      quantity: 50,
      name: "Countries",
    },
    {
      id: 1,
      icon: `https://i.ibb.co/qrCv4T5/projects.jpg`,
      quantity: 56,
      name: "Complete projects",
    },
    {
      id: 2,
      icon: `https://i.ibb.co/HGRrVMg/people.jpg`,
      quantity: 40,
      name: "happy clients",
    },
    {
      id: 3,
      icon: `https://i.ibb.co/n7K6JWn/feedback.jpg`,
      quantity: 55,
      name: "Publick actions",
    },
  ];
  return (
    <div className="my-16 items-center justify-center">
      <h2 className="text-2xl md:text-5xl text-primary">
        {" "}
        MILLIONS OF BUSINESS WE PROVIDE
      </h2>
      <p>Try to understand User Expectation</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16">
        {statusInfo.map((info) => (
          <SingleStatus key={info._id} info={info}></SingleStatus>
        ))}
      </div>
      <div class="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Status;

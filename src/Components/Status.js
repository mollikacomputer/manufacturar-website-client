import React from "react";
import SingleStatus from "./SingleStatus";

const Status = () => {
    const statusInfo = [
        {
          "id": 0,
          "icon": `https://i.ibb.co/fpyrSgd/flag.jpg` ,
          "quantity": 50,
          "name": "Countries"
        },
        {
          "id": 1,
          "icon": `https://i.ibb.co/qrCv4T5/projects.jpg`,
          "quantity": 56,
          "name": "Complete projects"
        },
        {
          "id": 2,
          "icon":`https://i.ibb.co/HGRrVMg/people.jpg`,
          "quantity": 40,
          "name": "happy clients"
        },
        {
            "id": 3,
            "icon": `https://i.ibb.co/n7K6JWn/feedback.jpg`,
            "quantity": 55,
            "name": "Publick actions"
          }
      ]
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16">
      {
        statusInfo.map( info => <SingleStatus
            key={info.id}
            info = {info}
            > </SingleStatus> )
      }
    </div>
  );
};

export default Status;

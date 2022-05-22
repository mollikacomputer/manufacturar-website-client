import React from 'react';
import Product from './Product';


const Products = () => {
   
  const products =  [
        {
          "_id": "628a5638bbc1bb492726b1d6",
          "name": "Wheel",
          "picture": "http://placehold.it/32x32",
          "description": "fc476b09-229a-46a5-8d1b-9aae51ad9eaf",
          "minimumorder": "0ec5c303-5213-4124-8e8d-08080d41698a",
          "orderqty": "9cd5d941-6d5c-43da-8168-a2e02512dbe5",
          "price": "9ed3e766-5e0c-4f55-8cdf-1e52a3c4b592"
        },
        {
          "_id": "628a563868feaf416960173c",
          "name":"Side Glass",
          "picture": "http://placehold.it/32x32",
          "description": "a2934817-9ae1-45cc-8327-402fae16a468",
          "minimumorder": "bda41ccc-deaa-4e38-b17e-9c02c086676a",
          "orderqty": "e8a3c79d-1080-4c85-8568-1531a5d7501f",
          "price": "3fad93c0-c3a5-4399-a135-5d4052ef84bd"
        },
        {
          "_id": "628a5638f1e1117a4ef6cb18",
          "name": "Window Glass",
          "picture": "http://placehold.it/32x32",
          "description": "1a24af77-be67-4c36-831f-bdc2a1c9932e",
          "minimumorder": "1a1423b4-0532-4cb4-91fd-4004e42800ce",
          "orderqty": "faedc570-14ac-4e24-95b6-d886db797079",
          "price": "6d805a81-6748-4002-af1d-9d0078d55b9f"
        },
        {
          "_id": "628a5638fdc864e9e09f66a6",
          "name": "Tire",
          "picture": "http://placehold.it/32x32",
          "description": "b3f78c6e-328b-43c9-95d0-68a4e0d9c3ac",
          "minimumorder": "786afb4f-a7e4-4e11-a77e-80d6b751e7e4",
          "orderqty": "6506cb4b-faf2-4ef9-a83e-143b02b09f21",
          "price": "8e3e52f3-a4fa-49e8-8720-14b5fda254b9"
        },
        {
          "_id": "628a5638d98bfa7e62ed0b14",
          "name": "Ring",
          "picture": "http://placehold.it/32x32",
          "description": "f7f45181-d831-4575-9933-204ea657410b",
          "minimumorder": "180e42ae-26ab-4bf1-943f-aec512baf722",
          "orderqty": "54a6d155-68f8-4dfc-802f-844cd48a8514",
          "price": "b148701d-9770-4558-b5fd-6e624015482d"
        },
        {
          "_id": "628a5638a580d96f0934cd09",
          "name":"Break",
          "picture": "http://placehold.it/32x32",
          "description": "e8eb0a0d-2c24-42e9-9006-3449a43ee8fb",
          "minimumorder": "63076eab-7f3e-47e3-9d28-fe40c5346b7a",
          "orderqty": "72f5a032-3972-4106-8705-abf0acff8ee2",
          "price": "1040b577-ef9e-4cb7-bbc8-cfd08a17871f"
        }
      ] 

    console.log(products);
    return (
        <div>
            <h2 className='text-5xl' > Products {products.length} </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16" >
            {
                products.map( product => <Product
                key={product.id}
                product = {product}
                > </Product> )
            }
            </div>
            
        </div>
    );
};

export default Products;
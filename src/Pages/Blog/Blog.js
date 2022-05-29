import React, { Component } from "react";
import SingleBlog from "./SingleBlog";

const Blog = () => {
    const blogData = [
        {
            id: 1,
            title: "How will you improve the performance of a React Application?",
        description: " I will devided many part of components and i follow UI component library to get better quality and better performence. Image will be uploaded in imagebb and use linking and dynamic website will be like to get better performence and i will follow react updateing part. I like SPA website get better performence."
        },
        {
            id: 2,
            title: "What are the different ways to manage a state in a React application?",
        description: " The four kinds of React State manage. When we talk about state in our applications. its important ot be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps  1. Local State 2. Global State. 3. Server State 4. URL state Local state is data management Component. Local state manage often managed in React using useState Hook. Global UI state Global state is data we manage across multiple components    Sometimes state we think should be local might become global.Server state  Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. "     },
        {
            id: 3,
            title: "How does prototypical inheritance work?",
        description: "What is prototype-based inheritance? Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming."
        },
        {
            id: 4,
            title: "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts",
        description: " inside the [...] is spread operator its works rest of all things or all products  "
        },
        {
            id: 5,
            title: "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
        description: "ttatrta"
        },
        {
            id: 6,
            title: "What is a unit test? Why should write unit tests?",
        description: "Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently."
        },
    ]
  return (

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {
        blogData.map( bInfo => (
      <SingleBlog 
      key={bInfo.id} 
      bInfo={bInfo}></SingleBlog>
    ))
    }
    </div>
  );
};

export default Blog;

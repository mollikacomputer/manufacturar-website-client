import {
  createUserWithEmailAndPassword,
  getAuth,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import useToken from "../Hooks/useToken";

const auth = getAuth(app);

const Register = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  
  const [token] = useToken(user);

  const handleUserNameBlur = (e) => {
    setUser(e.target.value);
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  // console.log(username, password, email);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyBeforeUpdateEmail();
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(user, password, email);
    toast('Successfully created new google user');
    e.target.reset();
  };

  return (
    <div class="h-screen flex justify-center items-center mt-6">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} class="card-body">
          <h2 className="text-3xl text-primary"> Register </h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered"
              onBlur={handleUserNameBlur}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mobile No</span>
            </label>
            <input
              type="number"
              placeholder="Mobile Number"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              onBlur={handleEmailBlur}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              onBlur={handlePasswordBlur}
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-2">
            <button class="btn btn-primary">Register now</button>
          </div>
          <span > Have you an account? {" "} 
            <Link className="text-secondary" to='/login' > 
            Go to Login
            </Link></span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

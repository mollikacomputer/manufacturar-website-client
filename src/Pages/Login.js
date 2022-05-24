import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";
import GoogleIcon from '../../src/Assets/socielIcon/google.png';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);


const Login = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const googleLoginToast = () => toast("Successfully Login with Google");
  const handleGoogleSignIn = () =>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then( result => {
      const user = result.user;
      setUser(user.displayName);
      setEmail(user.email);
      console.log(user.displayName, user.email, user);
      googleLoginToast();
      
    })
  }
  return (
      <div class="h-screen flex justify-center items-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
        <h2 className="text-3xl text-primary" > Log In</h2>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
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
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <div class="form-control mt-6">
              <button onClick={handleGoogleSignIn} class="btn btn-primary">
                <img className="mr-4" style={{width: "30px"}} src={GoogleIcon} alt="" />
                SignInWith
                </button>
            </div>
            
          </div>
        </div>
        <h2 className="text-5xl"> Name :{user.displayName} </h2>
        <ToastContainer />
      </div>
  );
};

export default Login;

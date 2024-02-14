import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the email already exists
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length === 0) {
        // Validate password length
        if (password.length < 6) {
          setError("Password must be at least 6 characters long");
        } else if (password === confirmPassword) {
          // Create a new user with the provided email and password
          await createUserWithEmailAndPassword(auth, email, password);
          setError(null);
          navigate("/");
        } else {
          setError("Password and confirm password do not match");
        }
      } else {
        setError("Email already in use");
      }
    } catch (error) {
      setError("Email already in use");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[20rem]">
          <h1 className="text-4xl font-bold">Sign up now!</h1>
          <p className="py-6">Sign up to share your photos!</p>
          {!error ? (
            ""
          ) : (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>
        <div className="card shrink-0 w-full sm:w-[30rem] shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link to="/login" className="text-blue-800 link">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import './AuthPage.css';
import Partical from '../components/Partical';
import '../App.css';
import AuthImage from "../assets/auth.png";
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthPage(props) {
  const [showEmailForm, setShowEmailForm] = useState(false);
    const handelSubmit = (e) => {
    e.preventDefault();
    
    }
  return (
    <PageTransition>
      <Partical />
      <section id='authSection' className='section'>
        <div className="auth-wrapper d-flex justify-content-center align-items-center vh-100 px-2">
          <div
            className="
              auth-page-container
              d-flex
              flex-column flex-md-row
              rounded
              overflow-hidden
              position-relative
              shadow
            "
          >
            {/* Left: Image (shown on all screens, covers full left on desktop) */}
            <div className="auth-image-container">
              <motion.img
                src={AuthImage}
                alt="Auth"
                className="auth-image"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Right: Content */}
            <div className="auth-content d-flex flex-column justify-content-center align-items-center p-4 w-100 position-relative">
              {/* Cross */}
              <div className="cross">
                <Link to={"/"}>
                  <i className="bi bi-x-lg text-white fs-3"></i>
                </Link>
              </div>

              {/* Title and message */}
              <h1 className="fw-bold text-white text-center mb-2">
                {props.type === 'login' ? 'Login' : 'Register'}
              </h1>
              <p className="message text-light text-center mb-3">
                {props.message || (props.type === 'login'
                  ? "Welcome Back To Community"
                  : "Join Today Our Community")}
              </p>

              {/* Buttons and Forms */}
              <form className="w-100 d-flex flex-column align-items-center">
                <AnimatePresence>
                  {!showEmailForm && (
                    <>
                      <motion.button
                        type="button"
                        onClick={() => setShowEmailForm(true)}
                        className="btn btn-outline-light mb-2"
                        style={{ maxWidth: "300px", width: "100%" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        Continue with Email
                      </motion.button>
                      <motion.p
                        className="text-light my-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        or
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>

                {/* Google Button */}
                <motion.button
                  type="button"
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2 py-2 shadow-sm border rounded bg-white text-dark mb-2"
                  style={{ maxWidth: "300px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <span className="fw-medium">Continue with Google</span>
                </motion.button>

                {/* Email Form */}
                <AnimatePresence>
                  {showEmailForm && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="w-100 mt-3"
                      style={{ maxWidth: "300px" }}
                    >
                      {props.type === 'register' && (
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control mb-2"
                        />
                      )}
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-2"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control mb-2"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mt-2"
                        onClick={handelSubmit}
                      >
                        {props.type === 'login' ? 'Login with Email' : 'Register with Email'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Switch Account Links */}
                <div className="mt-3 text-white">
                  {props.type === 'login' ? (
                    <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                  ) : (
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

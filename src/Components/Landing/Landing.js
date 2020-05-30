import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <form className="form-container">
      <p>
        Welcome to the big picture life tracker. This is an interactive journal
        application to help you find insight into how your habits affect your
        happiness, performance and well... whatever you want to track!
      </p>
      <NavLink to={`/login`}>
        <button>Sign in</button>
      </NavLink>
      <NavLink to={`/login`}>
        <button>Sign in with demo account</button>
      </NavLink>
      <NavLink to={`/sign-up`}>
        <button>Create an account</button>
      </NavLink>
    </form>
  );
}

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import our validation function from helper-functions.js - DON'T REALLY NEED THIS, JUST PUT THE LOGIC

// a controlled form so use state
export default class SignUp extends Component {
  state = {
    // form validation stuff in here
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    // callback prop to make the fetch - This will send the state to the backend to create a token and pass it work
  };

  render() {
    return (
      <div className="form-container">
        {/* text instructions and a go back button */}
        <p>Use the form below to create a new account.</p>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            name="user-name"
            required
            placeholder="user name"
            onChange={this.changeHandler}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="email address"
            onChange={this.changeHandler}
          ></input>
          <label htmlFor="password">Password (minimum 6 characters)</label>
          <input
            type="password"
            name="password"
            required
            placeholder="password"
            onChange={this.changeHandler}
          ></input>
          <label htmlFor="confirm-pw"></label>
          <input
            type="password"
            name="confirm-pw"
            required
            placeholder="re-enter password"
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Sign up</button>
        </form>
        <NavLink to={`/login`} className="link">
          I already have an account
        </NavLink>
      </div>
    );
  }
}

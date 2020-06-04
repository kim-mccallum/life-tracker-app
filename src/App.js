import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Banner from "./Components/Banner/Banner";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import JournalSetupForm from "./Components/JournalSetupForm/JournalSetupForm";
import JournalEntryForm from "./Components/JournalEntryForm/JournalEntryForm";
import "./App.css";

export default class App extends Component {
  // just authentication here
  state = {
    // after sign in, this will be changed with callback props
    // SET THIS BACK TO false
    isAuth: true,
    error: false,
    authLoading: false,
  };
  // SIGN UP FUNCTION - TO BE PASSED TO THE SIGNUP COMPONENT - THIS IS THE FETCH TO THE SIGNUP ENDPOINT
  signup = (formData) => {
    // Just get the data for the fetch
    console.log(formData);
    // fetch from the api/users/signup endpoint
  };

  login = (formData) => {
    console.log(formData);
  };

  render() {
    let routes = (
      <Switch>
        {/* A BUNCH OF SWITCH STATEMENTS TO RENDER DIFFERENT COMPONENTS ACCORDING TO THE ROUTE? */}
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/login"
          render={() => <Login login={this.login} />}
        />
        <Route
          exact
          path="/sign-up"
          render={(routeProps) => (
            <SignUp signup={this.signup} {...routeProps} />
          )}
        />
        <Route exact path="/journal-setup" component={JournalSetupForm} />
        <Route exact path="/journal-entry" component={JournalEntryForm} />
        {/* fetch the data in the dashboard component! */}
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
    return (
      <div className="App">
        {/* PASS ISAUTH FOR CONDITIONAL RENDERING */}
        <Banner isAuth={this.state.isAuth} />
        {routes}
      </div>
    );
  }
}

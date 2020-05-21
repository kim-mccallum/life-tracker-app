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
import STORE from "./STORE";

export default class App extends Component {
  render() {
    let routes = (
      <Switch>
        {/* A BUNCH OF SWITCH STATEMENTS TO RENDER DIFFERENT COMPONENTS ACCORDING TO THE ROUTE? */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/journal-setup" component={JournalSetupForm} />
        <Route exact path="/journal-entry" component={JournalEntryForm} />
        {/* fetch the data in the dashboard component! */}
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
    return (
      <div className="App">
        <Banner />
        {routes}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class JournalEntryForm extends Component {
  state = {};
  // Fetch the data to build the journal entry form
  componentDidMount() {
    const userid = localStorage.getItem("user_id");
    console.log(userid);
    // fetch from the api/entries endpoint with the user in the body
    fetch(`http://localhost:8000/api/journal_settings/${userid}`, {
      // you can't set a body in a GET request
      method: "GET",
    })
      .then((response) => {
        if (response.status === 400) {
          throw new Error(response.error);
        }
        return response.json();
      })
      .then((json) => {
        // what would be good behavior here?
        console.log(json);
      })
      .catch((err) => {
        // have a JSX <p> to render this error
        this.setState({ error: err });
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    // make a post request here to add the entry
  };
  render() {
    return (
      <form>
        <h1>Journal Entry Form </h1>
      </form>
    );
  }
}

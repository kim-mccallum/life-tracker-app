import React, { Component } from "react";

export default class JournalEntryForm extends Component {
  state = {
    date: "",
    target_value: "",
    habit_value: "",
  };
  // Fetch the data to build the journal entry form
  componentDidMount() {
    const userid = localStorage.getItem("user_id");
    console.log(userid);
    // fetch from the api/entries endpoint with the user_id parameter
    fetch(`http://localhost:8000/api/journal-settings/${userid}`, {
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
        // put the response data into state in order to render the questions
        // before the response, the data should be null
        console.log(json);
        const {
          journal_id,
          target_name,
          type,
          units,
          target_description,
          habit_name,
          habit_description,
        } = json;
        this.setState({
          journal_id,
          target_name,
          type,
          units,
          target_description,
          habit_name,
          habit_description,
        });
      })
      .catch((err) => {
        // have a JSX <p> to render this error
        this.setState({ error: err });
      });
  }
  // This doesn't seem to be putting the new values from the form into state
  changeHandler = (e) => {
    // not getting the values from the form
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    // make a post request here to the entries
    let { journal_id, date, target_value, habit_value } = this.state;
    journal_id = journal_id.toString();
    const entryBody = {
      user_id: window.localStorage.getItem("user_id"),
      journal_id,
      date,
      target_value,
      habit_value,
    };
    console.log(JSON.stringify(entryBody));
    fetch("http://localhost:8000/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(entryBody),
    })
      .then((res) => {
        if (!res.status === 201) {
          throw new Error({ message: "post failed for some reason" });
        }
      })
      // have an error in state and display something in a <p> for the user
      .catch((err) => console.log(err));
  };
  render() {
    // render the questions
    let formQuestions;
    if (!this.state.target_name) {
      formQuestions = <h1>Fetching your journal questions...</h1>;
    }
    // pull these out of state
    formQuestions = (
      <fieldset>
        <label htmlFor="target_value">{this.state.target_name}</label>
        <label>{this.state.target_description}</label>
        <input
          type="text"
          name="target_value"
          required
          onChange={this.changeHandler}
        ></input>

        <label htmlFor="habit_value">{this.state.habit_name}</label>
        <select name="habit_value" required onChange={this.changeHandler}>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        <button type="submit">Submit entry</button>
      </fieldset>
    );

    console.log(this.state);
    return (
      <form className="journal-entry-form" onSubmit={this.submitHandler}>
        <h2>Make a journal entry</h2>
        <p>PLACEHOLDER FOR DATE PICKER</p>
        {formQuestions}
      </form>
    );
  }
}

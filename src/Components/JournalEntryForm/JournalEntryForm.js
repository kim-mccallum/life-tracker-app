import React, { Component } from "react";

export default class JournalEntryForm extends Component {
  state = {};
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
        // console.log(json);
        const {
          target_name,
          type,
          units,
          description,
          habit_1,
          habit_2,
          habit_3,
        } = json;
        this.setState({
          target_name,
          type,
          units,
          description,
          habit_1,
          habit_2,
          habit_3,
        });
      })
      .catch((err) => {
        // have a JSX <p> to render this error
        this.setState({ error: err });
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    // make a post request here to the entries
  };
  render() {
    // coerce habits into an array
    let habitArr = Object.keys(this.state).filter((item) =>
      item.includes("habit")
    );
    console.log("array?", habitArr);
    // render the questions
    let formQuestions;
    if (!this.state.target_name) {
      formQuestions = <h1>Still fetching your data...</h1>;
    }
    // pull these out of state
    formQuestions = (
      <fieldset>
        <label htmlFor={this.state.target_name}>{this.state.target_name}</label>
        <label>{this.state.description}</label>
        <input
          type="text"
          name={this.state.target_name}
          required
          onChange={this.changeHandler}
        ></input>
        {habitArr.map((habit, index) => {
          return (
            <fieldset key={index}>
              <p>{this.state[habit]}</p>
              <label htmlFor={this.state[habit]}>{this.state[habit]}</label>
              <select
                name={this.state[habit]}
                required
                onChange={this.changeHandler}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </fieldset>
          );
        })}
        {/* <label htmlFor={this.state.habit_1}>{this.state.habit_1}</label>
        <select
          name={this.state.habit_1}
          required
          onChange={this.changeHandler}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}
        {/* do some conditional logic to handle optional habits */}
        {/* {this.state.habit_2 ? (
          <fieldset>
            <label htmlFor={this.state.habit_2}>{this.state.habit_2}</label>
            <select
              name={this.state.habit_2}
              required
              onChange={this.changeHandler}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </fieldset>
        ) : (
          ""
        )} */}

        <button type="submit">Submit entry</button>
      </fieldset>
    );

    console.log(this.state);
    return (
      <form className="journal-entry-form" onSubmit={this.submitHandler}>
        <legend>Make a journal entry</legend>
        {formQuestions}
      </form>
    );
  }
}

import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JournalSetupForm.css";

export default class JournalSetupForm extends Component {
  state = {
    // form validation stuff in here LATER
    habitNums: [1],
    // put each habit as an object in array
    // PROBLEMS DISCUSSED HERE? https://www.robinwieruch.de/react-state-array-add-update-remove
    // this will hold the user input data
    habits: [],
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // THIS NEEDS TO BE PASSED BACK TO APP
  submitHandler = (e) => {
    e.preventDefault();
    // callback prop to make the fetch - This will send the state to the backend to create a token and pass it work
  };
  // add a habit fieldset but only up to 3 habits
  addHabitHandler = (e) => {
    let habits = this.state.habitNums;
    if (habits.length < 3) {
      habits.push(1);
      this.setState({ habitNums: habits });
    }
  };
  renderHabitInput = (index) => {
    // A function to return JSX for each new fieldset when user adds a habit
    // include and onChange to collect data from the form
    // use the habitNum value to build the html -
    const habitInput = (
      <fieldset>
        <legend>Supporting Habits</legend>
        <label htmlFor={`habit-${index}`}>Habit</label>
        <input
          type="text"
          id={`habit-${index}`}
          name={`habit-${index}`}
          required
          placeholder="No caffeine"
          onChange={this.changeHandler}
        ></input>
        <label htmlFor={`habit-${index}-note`}>Note</label>
        <input
          type="text"
          id={`habit-${index}-note`}
          name={`habit-${index}-note`}
          required
          placeholder="dark chocolate excluded"
          onChange={this.changeHandler}
        ></input>
      </fieldset>
    );
    return habitInput;
  };
  render() {
    return (
      <div className="journal-setup-container">
        <h2>Log Setup</h2>
        <p className="journal-setup-instructions">
          Start by specifying a target lifestyle factor that you would like to
          track then choose up to 3 habits that you believe affect or support
          this target factor. Your targets and habits will be used to build your
          daily journal and tracking these over time will provide insight and
          help you reach your goals!
        </p>
        <form className="journal-setup-form" onSubmit={this.submitHandler}>
          <fieldset>
            <legend>
              Health, wellness or performance factor you want to target
            </legend>
            <label htmlFor="target">Name</label>
            <input
              type="text"
              name="target"
              required
              placeholder="E.g., resting heart rate"
              onChange={this.changeHandler}
            ></input>
            <label htmlFor="target-type">Type:</label>
            <select name="target-type">
              <option value="numeric">Number</option>
              <option value="binary">Yes/No</option>
              <option value="score-1-3">Score: 1-3</option>
              <option value="score-1-5">Score: 1-5</option>
            </select>
            <label htmlFor="target-units">Units:</label>
            <input
              type="text"
              name="target-units"
              required
              placeholder="BPM"
              onChange={this.changeHandler}
            ></input>
            <label htmlFor="note">Description:</label>
            <input
              type="text"
              name="note"
              required
              placeholder="taken first thing in the am"
              onChange={this.changeHandler}
            ></input>
          </fieldset>
          {this.state.habitNums.map((item, idx) => {
            return this.renderHabitInput(idx);
          })}
          <FontAwesomeIcon
            className="add-habit-btn"
            icon={faPlus}
            size="lg"
            onClick={this.addHabitHandler}
          />
          <button type="submit">Create Daily Log</button>
        </form>
      </div>
    );
  }
}

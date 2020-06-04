import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JournalSetupForm.css";

export default class JournalSetupForm extends Component {
  state = {
    // form validation stuff in here
    habitNum: 1,
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // THIS NEEDS TO BE PASSED BACK TO APP
  submitHandler = (e) => {
    e.preventDefault();
    // callback prop to make the fetch - This will send the state to the backend to create a token and pass it work
  };
  // add a habit but only up to 3
  addHabitHandler = (e) => {
    if (this.state.habitNum < 3) {
      this.setState((state) => {
        return { habitNum: state.habitNum + 1 };
      });
    }
  };
  render() {
    return (
      <div className="journal-setup-container">
        <h2>Log Setup</h2>
        <p className="journal-setup-instructions">
          Start by specifying a target lifestyle factor that you would like to
          track then choose up to 3 habits that you believe affect or support
          this target goal. Your targets and habits will be used to build your
          daily journal and tracking these over time will provide insight and
          help you reach your goals!
        </p>
        <form className="journal-setup-form" onSubmit={this.submitHandler}>
          <fieldset>
            <legend>
              Health, wellness or performance factor you want to change
            </legend>
            <label htmlFor="target">Target</label>
            <input
              type="text"
              name="target"
              required
              placeholder="E.g., blood pressure"
              onChange={this.changeHandler}
            ></input>
            <label htmlFor="target-type">Type:</label>
            <select name="target-type">
              <option value="numeric">Number</option>
              <option value="binary">Yes/No</option>
              <option value="score-1-3">Score: 1-3</option>
              <option value="score-1-5">Score: 1-5</option>
            </select>
            <label htmlFor="target-units">Description:</label>
            <input
              type="text"
              name="target-units"
              required
              placeholder="mmHg"
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

          <fieldset>
            <legend>Supporting Habits</legend>
            <label htmlFor="habit-1">Habit</label>
            <input
              type="text"
              name="habit-1"
              required
              placeholder="No caffeine"
              onChange={this.changeHandler}
            ></input>
            <label htmlFor="habit-1">Note</label>
            <input
              type="text"
              name="habit-1"
              required
              placeholder="dark chocolate excluded"
              onChange={this.changeHandler}
            ></input>
          </fieldset>
          <FontAwesomeIcon
            className="add-habit-btn"
            icon={faPlus}
            onClick={this.addHabitHandler}
          />
          <button type="submit">Create Daily Log</button>
        </form>
      </div>
    );
  }
}

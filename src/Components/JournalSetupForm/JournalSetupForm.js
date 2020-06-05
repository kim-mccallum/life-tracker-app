import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JournalSetupForm.css";

export default class JournalSetupForm extends Component {
  state = {
    // form validation stuff in here LATER
    habitNum: 1,
    // put each habit as an object in array
    // PROBLEMS DISCUSSED HERE? https://www.robinwieruch.de/react-state-array-add-update-remove
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
    if (this.state.habitNum < 3) {
      this.setState((state) => {
        const habits = state.habits.concat({ habit: "hello" });
        // console.log(this.state.habitNum + 1);
        return { habitNum: state.habitNum + 1, habits };
      });
      // call renderHabitInput in here so that you don't create too many (MAX 3)
      // THIS DOESN'T ADD TO THE UI? DO I NEED TO PUT THIS IN A COMPONENT DID UPDATE LIFECYCLE METHOD?
      this.renderHabitInput();
    }
  };
  // call this once initially and then every time the addHabitHandler button is clicked
  renderHabitInput = () => {
    // A function to return JSX for each new fieldset when user adds a habit
    // include and onChange to collect data from the form
    // use the habitNum value to build the html -
    console.log(this.state);
    const habitInput = (
      <fieldset>
        <legend>Supporting Habits</legend>
        <label htmlFor={`habit-${this.state.habitNum}`}>Habit</label>
        <input
          type="text"
          name={`habit-${this.state.habitNum}`}
          required
          placeholder="No caffeine"
          onChange={this.changeHandler}
        ></input>
        <label htmlFor={`habit-${this.state.habitNum}-note`}>Note</label>
        <input
          type="text"
          name={`habit-${this.state.habitNum}-note`}
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
          this target goal. Your targets and habits will be used to build your
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
          {/* MAKE SURE TO CALL RENDERHABIT ONCE AT FIRST TO GET ONE QUESTION */}
          {this.renderHabitInput()}
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

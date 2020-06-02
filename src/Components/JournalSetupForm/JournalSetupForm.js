import React, { Component } from "react";
import "./JournalSetupForm.css";

export default class JournalSetupForm extends Component {
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
      <div className="journal-setup-container">
        <h2>Journal Setup</h2>
        <p className="journal-setup-instructions">
          Choose the metrics that you would like to track. You can specify up to
          3 metrics. Metrics can be quantitative or qualitative. Use the
          description field to code qualitative values.
        </p>
        <form className="journal-setup-form" onSubmit={this.submitHandler}>
          <fieldset>
            <legend>Question 1.</legend>
            <label htmlFor="metric-1">Metric</label>
            <input
              type="text"
              name="metric-1"
              required
              placeholder="E.g., exercise"
              onChange={this.changeHandler}
            ></input>
            <label for="m1-type">Type:</label>
            <select name="m1-type">
              <option value="numeric">Numeric</option>
              <option value="quality">Qualitative</option>
            </select>
            <label for="m1-desc">Description:</label>
            <input
              type="text"
              name="m1-desc"
              required
              placeholder="minutes of aerobic exercise."
              onChange={this.changeHandler}
            ></input>
          </fieldset>

          <fieldset>
            <legend>Question 2.</legend>
            <label htmlFor="metric-2">Metric</label>
            <input
              type="text"
              name="metric-2"
              required
              placeholder="Caffeine consumptions"
              onChange={this.changeHandler}
            ></input>
            <label for="m2-type">Type:</label>
            <select name="m2-type">
              <option value="numeric">Numeric</option>
              <option value="quality">Qualitative</option>
            </select>
            <label for="m2-desc">Description:</label>
            <input
              type="text"
              name="m2-desc"
              required
              placeholder="1=yes, 0=no"
              onChange={this.changeHandler}
            ></input>
          </fieldset>

          <fieldset>
            <legend>Question 3.</legend>
            <label htmlFor="metric-3">Metric</label>
            <input
              type="text"
              name="metric-3"
              required
              placeholder="sleep quality"
              onChange={this.changeHandler}
            ></input>
            <label for="m3-type">Type:</label>
            <select name="m3-type">
              <option value="numeric">Numeric</option>
              <option value="quality">Qualitative</option>
            </select>
            <label for="m3-desc">Description:</label>
            <input
              type="text"
              name="m3-desc"
              required
              placeholder="1=poor, 2=ok, 3=good"
              onChange={this.changeHandler}
            ></input>
          </fieldset>
          <button type="submit">Create journal</button>
        </form>
      </div>
    );
  }
}

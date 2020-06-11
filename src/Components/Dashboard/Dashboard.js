import React, { Component } from "react";
// import Chart from "chart.js";
// import moment from "moment";
import TrendChart from "../TrendChart/TrendChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import "./Dashboard.css";

export default class Dashboard extends Component {
  state = {
    activeButton: "",
    user_id: window.localStorage.getItem("user_id"),
  };

  render() {
    console.log(this.state.user_id);
    return (
      <div className="dashboard-container">
        <div className="summary-container">
          <h2 className="greeting">Welcome, [User]</h2>
          <p>
            You have logged on [60] days and completed all of your habits 50% of
            the time. You weekly average [sleep] is [6 hours]
          </p>
          <div className="stats">
            <p>Target: Sleep - 7 hour average</p>
            <p>Supporting Habits: Exercise, meditate, no junk food.</p>
          </div>
        </div>
        <div className="chart-container">
          <DoughnutChart />
          <TrendChart />
        </div>
      </div>
    );
  }
}

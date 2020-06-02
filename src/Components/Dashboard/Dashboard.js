import React, { Component } from "react";
import Chart from "chart.js";
import moment from "moment";
import STORE from "../../STORE";
import "./Dashboard.css";

export default class Dashboard extends Component {
  state = {
    activeButton: "",
  };
  // FETCH DATA IN HERE
  componentDidMount() {
    //  grab the canvas and getContext
    let ctx = document.getElementById("dashboard-chart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        // REPLACE WITH STATE
        // convert dates to short format
        labels: STORE.dates.map((dt) => moment(dt).format("L")),
        datasets: [
          {
            label: "Exercise",
            data: STORE.exercise,
            type: "line",
            yAxisID: "A",
          },
          {
            label: "Caffeine",
            data: STORE.caffeine,
            yAxisID: "B",
          },
          {
            label: "Sleep",
            data: STORE.sleepQuality,
            yAxisID: "B",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              id: "A",
              type: "linear",
              position: "left",
            },
            {
              id: "B",
              type: "linear",
              position: "right",
              //   ticks: {
              //     suggestedMax: 1.5,
              //   },
            },
          ],
        },
      },
    });
  }
  render() {
    // const datesFormatted = STORE.dates.map((dt) => moment(dt).format("L"));
    // console.log(datesFormatted);
    return (
      <div className="dashboard-container">
        <div class="btn-group">
          <button>1 Month</button>
          <button>3 Months</button>
          <button>All Time</button>
        </div>
        <div className="chart-container">
          <canvas id="dashboard-chart"></canvas>
        </div>
      </div>
    );
  }
}

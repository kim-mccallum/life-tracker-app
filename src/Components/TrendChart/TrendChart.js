import React, { Component } from "react";
import Chart from "chart.js";
import moment from "moment";
import STORE from "../../STORE";

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
            yAxisID: "B",
            backgroundColor: "#D6E9C6", // green
          },
          {
            label: "Caffeine",
            data: STORE.caffeine,
            yAxisID: "B",
            backgroundColor: "#FAEBCC", // yellow
          },
          {
            label: "Sleep",
            data: STORE.sleep,
            type: "line",
            yAxisID: "A",
            backgroundColor: "#EBCCD1", // red
          },
        ],
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
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
              //   maybe remove
              stacked: true,
              ticks: {
                suggestedMax: 3,
              },
            },
          ],
        },
      },
    });
  }
  render() {
    return (
      <div className="trendchart-container">
        <canvas id="dashboard-chart" width="600" height="300"></canvas>
      </div>
    );
  }
}

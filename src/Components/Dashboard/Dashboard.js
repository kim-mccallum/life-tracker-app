import React, { Component } from "react";
import Chart from "chart.js";
import moment from "moment";
import STORE from "../../STORE";
import "./Dashboard.css";

// DATE HANDLING HELPER FUNCTION - PUT THIS IN THE HELPER FNS MODULE?
const dateArray = (dates) => {
  // sort in ascending order
  const sortedDates = dates.sort((a, b) => moment(a).diff(moment(b)));
  // convert to moment objects
  const momentDates = sortedDates.map((dt) => moment(dt));
  // create an empty array to hold 0/1 (no and yes)
  const days = [];
  // get first and last dates
  const dateStart = momentDates[0];
  const dateEnd = momentDates[momentDates.length - 1];
  console.log(dateStart, dateEnd);
  // subtract start from end and while the difference is positive, check each date to see if it exists
  while (dateEnd.diff(dateStart, "days") >= 0) {
    days.push(dateStart.format("L"));
    // increment days
    dateStart.add(1, "days");
  }
  // return days;
  return [dates.length, days.length - dates.length];
};

export default class Dashboard extends Component {
  state = {
    activeButton: "",
  };
  // FETCH DATA IN HERE
  componentDidMount() {
    // pie chart
    let ctx1 = document.getElementById("dashboard-pie-chart").getContext("2d");
    let myPieChart = new Chart(ctx1, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: dateArray(STORE.dates),
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          },
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Logged", "Not Logged"],
      },
      options: {
        title: {
          display: true,
          text: "Days logged",
        },
      },
    });

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
    console.log(dateArray(STORE.dates));
    return (
      <div className="dashboard-container">
        <div className="btn-group">
          <button>1 Month</button>
          <button>3 Months</button>
          <button>All Time</button>
        </div>
        <div className="chart-container">
          <canvas id="dashboard-pie-chart"></canvas>
          <canvas id="dashboard-chart"></canvas>
        </div>
      </div>
    );
  }
}

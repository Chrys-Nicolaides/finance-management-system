import React from "react";
import BarChart from "../charts/BarChart";
import theme from "../../tailwindConfig";

const BarChartPage = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light bars
      {
        label: "Income",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: theme.colors.indigo[400],
        hoverBackgroundColor: theme.colors.indigo[300],
        barPercentage: 0.8,
        // borderRadius: 8,
        // categoryPercentage: 0.88,
      },
      // Dark bars
      {
        label: "Expenses",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: theme.colors.indigo[500],
        hoverBackgroundColor: theme.colors.indigo[400],
        barPercentage: 0.8,
        // borderRadius: 8,
        // categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="bar-parent">
      {/* <header>
        <h2>Income vs Exepenses</h2>
      </header> */}
      {/* <BarChart data={chartData} width={595} height={260} /> */}
      <BarChart data={chartData} />
    </div>
  );
};

export default BarChartPage;

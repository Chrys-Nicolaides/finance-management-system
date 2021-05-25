import React, { useState, useEffect } from "react";
import DoughnutChart from "../charts/DoughnutChart";
import theme from "../../tailwindConfig";

const DoughnutChartPage = (props) => {
  const { data } = props;

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(data),
        backgroundColor: [
          theme.colors.teal[300],
          theme.colors.indigo[700],
          theme.colors.indigo[500],
          theme.colors.red[300],
          theme.colors.orange[200],
          theme.colors.indigo[300],
        ],
        hoverBackgroundColor: [
          theme.colors.teal[400],
          theme.colors.indigo[800],
          theme.colors.indigo[600],
          theme.colors.red[400],
          theme.colors.orange[300],
          theme.colors.indigo[400],
        ],
        borderStyle: ["solid"],
        borderColor: ["transparent"],
      },
    ],
  };

  return (
    <div className="doughnut-parent w-full">
      {/* <header className="">
        <h2 className="text-gray-500 dark:text-gray-400">
          Expenses by Category
        </h2>
      </header> */}
      {/* <DoughnutChart data={chartData} width={300} height={260} /> */}
      <DoughnutChart data={chartData} />
    </div>
  );
};

export default DoughnutChartPage;

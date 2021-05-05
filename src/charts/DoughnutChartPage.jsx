import React from "react";
import DoughnutChart from "../charts/DoughnutChart";
import theme from "../../tailwindConfig";

const DoughnutChartPage = () => {
  const chartData = {
    labels: [
      "Rent",
      "Utilities",
      "Internet",
      "Food & Groceries",
      "Subscriptions",
      "Other",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [35, 15, 10, 15, 10, 10],
        backgroundColor: [
          theme.colors.indigo[500],
          theme.colors.indigo[300],
          theme.colors.indigo[700],
          theme.colors.teal[300],
          theme.colors.red[300],
          theme.colors.orange[200],
        ],
        hoverBackgroundColor: [
          theme.colors.indigo[600],
          theme.colors.indigo[400],
          theme.colors.indigo[800],
          theme.colors.teal[400],
          theme.colors.red[400],
          theme.colors.orange[300],
        ],
        borderStyle: ["solid"],
        borderColor: ["transparent"],
        // hoverOffset: 2,
      },
    ],
  };

  return (
    <div className="flex flex-col ">
      <header className="">
        <h2 className="text-gray-500 dark:text-gray-400">
          Expenses by Category
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={300} height={260} />
    </div>
  );
};

export default DoughnutChartPage;

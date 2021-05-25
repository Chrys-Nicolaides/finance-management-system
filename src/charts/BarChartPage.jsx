import React from "react";
import BarChart from "../charts/BarChart";
import theme from "../../tailwindConfig";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const BarChartPage = (props) => {
  const { data } = props;

  dayjs.extend(customParseFormat);

  const labels = data.map((item) =>
    dayjs(`${item.year}.${item.month}`, "YYYY.M").format("DD-MM-YYYY")
  );
  const incomeData = data.map((item) => item.income);
  const expensesData = data.map((item) => item.expenses);

  const chartData = {
    // labels: Object.keys(data),
    labels: labels,
    datasets: [
      // Light bars
      {
        label: "Income",
        data: incomeData,
        backgroundColor: theme.colors.indigo[400],
        hoverBackgroundColor: theme.colors.indigo[300],
        barPercentage: 0.3,
        borderRadius: 2,
      },
      // Dark bars
      {
        label: "Expenses",
        data: expensesData,
        backgroundColor: theme.colors.indigo[500],
        hoverBackgroundColor: theme.colors.indigo[400],
        barPercentage: 0.3,
        borderRadius: 2,
      },
    ],
  };

  return (
    <div className="bar-parent w-full flex-grow h-[230px]">
      {/* <header>
        <h2>Income vs Exepenses</h2>
      </header> */}
      {/* <BarChart data={chartData} width={595} height={260} /> */}
      <BarChart data={chartData} />
    </div>
  );
};

export default BarChartPage;

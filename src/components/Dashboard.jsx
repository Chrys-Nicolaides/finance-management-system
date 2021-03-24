import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import TransactionsRecent from "./TransactionsRecent";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Balance />
      <div className="flex flex-col md:flex-row pb-6">
        <TransactionsRecent />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;

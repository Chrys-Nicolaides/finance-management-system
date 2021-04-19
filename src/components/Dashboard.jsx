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
      <div className="flex flex-col md:flex-row pb-6 mt-32">
        <TransactionsRecent className="md:flex-row md:w-full md:order-1" />
        <Chart className="md:flex-row md:w-full" />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import TransactionsRecent from "./TransactionsRecent";
import Chart from "./Chart";
import { FetchProfile } from "../services/api/Profile";
import { FetchProfileEmail } from "../services/api/Profile";


const Dashboard = () => {

  console.log('Shit')
  React.useEffect=(() => {
    const test = await FetchProfile(1)
    console.log(test)
  }, [])

  return (
    <div>
      <Header />
      <h1 className="text-9xl">
        Fuck
        </h1>
      <Balance />
      <div className="flex flex-col md:flex-row pb-6 mt-32">
        <TransactionsRecent className="md:flex-row md:w-full md:order-1" />
        <Chart className="md:flex-row md:w-full" />
      </div>
    </div>
  );
};

export default Dashboard;

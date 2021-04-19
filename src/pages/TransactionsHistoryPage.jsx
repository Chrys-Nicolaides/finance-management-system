import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../pages/Layouts";
import Card from "../components/Card";
import MyTable from "../components/Table";
import { HiArrowLeft } from "react-icons/hi";
import DatePicker from "../components/DatePicker";

import { FetchTransactions } from "../services/api/Transaction";

// const data = [
//   {
//     id: 0,
//     description: "IKEA",
//     amount: 110.05,
//     recurring: false,
//     recurringType: "string",
//     day: 0,
//     currency: "euros",
//     created: "27 Jan 2021",
//     updated: "string",
//     category: "Other",
//   },
//   {
//     id: 0,
//     description: "Cake",
//     amount: 22.55,
//     recurring: false,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "28 Jan 2021",
//     updated: "string",
//     category: "Food & Groceries",
//   },
//   {
//     id: 0,
//     description: "Metcons",
//     amount: 150.05,
//     recurring: false,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "14 Feb 2021",
//     updated: "string",
//     category: "Other",
//   },
//   {
//     id: 0,
//     description: "Rent",
//     amount: 600.55,
//     recurring: true,
//     recurringType: "monthly",
//     day: 0,
//     currency: "string",
//     created: "25 Feb 2021",
//     updated: "string",
//     category: "Rent",
//   },
//   {
//     id: 0,
//     description: "Netflix",
//     amount: 10.55,
//     recurring: true,
//     recurringType: "monthly",
//     day: 0,
//     currency: "string",
//     created: "28 Feb 2021",
//     updated: "string",
//     category: "Subscriptions",
//   },
//   {
//     id: 0,
//     description: "Data",
//     amount: 60.45,
//     recurring: false,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "28 Feb 2021",
//     updated: "string",
//     category: "Internet",
//   },
//   {
//     id: 0,
//     description: "UberEats",
//     amount: 25.55,
//     recurring: false,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "05 Mar 2021",
//     updated: "string",
//     category: "Food & Groceries",
//   },
//   {
//     id: 0,
//     description: "New Bike",
//     amount: 250.55,
//     recurring: true,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "16 Mar 2021",
//     updated: "string",
//     category: "Other",
//   },
//   {
//     id: 0,
//     description: "Utilities",
//     amount: 250.55,
//     recurring: true,
//     recurringType: "string",
//     day: 0,
//     currency: "string",
//     created: "26 Mar 2021",
//     updated: "string",
//     category: "Utilities",
//   },
// ];

const columns = ["category", "description", "created", "amount"];

const TransactionsHistoryPage = (
  props,
  { themeChange, darkTheme, accessToken, setLoading, profile }
) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactions, setTransactions] = useState([]);

  console.log(props);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await FetchTransactions(profile.id, accessToken, 1, 5);

      setTransactions(res);
      setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    }
  }, []);

  console.log(transactions);
  return (
    <DefaultLayout themeChange={themeChange} darkTheme={darkTheme}>
      <div className="bg-gray-100 dark:bg-gray-900 h-screen">
        <Link
          className="flex items-center pt-6 sm:pb-0.5 pb-4 text-gray-500 pl-4"
          to="/dashboard"
        >
          <HiArrowLeft />
          <h5 className="items-center pl-2.5 text-base">Back</h5>
        </Link>
        <Card
          fullWidth={false}
          additionalClasses={
            "lg:p-16 p-0 lg:m-10 m-0 text-gray-800 dark:text-gray-300"
          }
        >
          <div className="flex lg:justify-between lg:flex-row flex-col w-full pb-8 sm:pt-2 pt-0 ">
            <h3 className="items-center md:text-2xl text-lg lg:pl-0 pl-4 lg:pt-0 pt-6">
              Transaction history
            </h3>
            <div className="flex xl:flex-row flex-col lg:pt-0 pt-4 px-4 md:px-0">
              <DatePicker
                setInputValue={setStartDate}
                inputValue={startDate}
                placeholder="Start date"
                darkTheme={darkTheme}
              />
              <DatePicker
                setInputValue={setEndDate}
                inputValue={endDate}
                placeholder="End date"
                darkTheme={darkTheme}
              />
            </div>
          </div>
          {/* {loading ? <Modal>Loading...</Modal> : ""} */}
          <MyTable data={transactions} columns={columns} />{" "}
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default TransactionsHistoryPage;

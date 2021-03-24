import React from "react";
import TransactionItem from "./TransactionItem";
import { GoPlus } from "react-icons/go";

const TransactionsRecent = () => {
  const TransactionArray = [
    {
      amount: 110.05,
      description: "IKEA",
      day: 2,
      recurring: false,
      recurringType: "",
      currency: "euros",
      category: "Other",
    },
    {
      amount: 5.55,
      description: "UberEats",
      day: 3,
      recurring: false,
      recurringType: "",
      currency: "euros",
      category: "Food & Groceries",
    },
    {
      amount: 600.5,
      description: "Rent",
      day: 3,
      recurring: true,
      recurringType: "monthly",
      currency: "euros",
      category: "Rent",
    },
    {
      amount: 10.05,
      description: "Netflix",
      day: 2,
      recurring: true,
      recurringType: "monthly",
      currency: "euros",
      category: "Subscriptions",
    },
    {
      amount: 250.05,
      description: "New Bike",
      day: 2,
      recurring: false,
      recurringType: "",
      currency: "euros",
      category: "Other",
    },
  ];

  return (
    <div className="font-body rounded-xl ml-32 mr-4 w-3/5 bg-white p-6 shadow-md flex flex-col">
      <div className=""></div>
      <h3 className="pb-6">Recent transactions</h3>
      <div className="flex justify-between text-gray-400 ml-14">
        <h6>Description</h6>
        <h6>Amount</h6>
      </div>
      {TransactionArray.map((transaction, index) => (
        <TransactionItem transaction={transaction} key={index} index={index} />
      ))}
      <div className="flex justify-end mt-auto">
        <button className="button-primary flex">
          <GoPlus stroke="white" strokeWidth={0.2} className="mr-2" />
          Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionsRecent;

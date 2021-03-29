import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import TransactionItem from "./TransactionItem";
import ModalForm from "./ModalForm";
import Card from "./Card";

const TransactionsRecent = () => {
  const [showModal, setShowModal] = useState(false);

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
    <Card fullWidth={true}>
      {showModal ? <ModalForm setShowModal={setShowModal} /> : ""}
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
        <button
          className="button-primary flex"
          onClick={() => setShowModal(!showModal)}
        >
          <GoPlus stroke="white" strokeWidth={0.2} className="mr-2" />
          Transaction
        </button>
      </div>
    </Card>
  );
};

export default TransactionsRecent;

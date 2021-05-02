import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import ModalForm from "./ModalForm";
import Card from "./Card";
import MyTable from "./Table";

const TransactionsRecent = ({
  accessToken,
  transactions,
  profile,
  getTransactions,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    description: "",
    day: "1",
    amount: "",
    currency: "EUR",
    recurring: false,
    recurringType: "Weekly",
    categoryId: "",
  });

  const columns = ["category", "description", "created", "amount"];

  const categories = [
    { name: "Rent", id: 1 },
    { name: "Utilities", id: 2 },
    { name: "Internet", id: 3 },
    { name: "Food & Groceries", id: 4 },
    { name: "Subscriptions", id: 5 },
    { name: "Other", id: 6 },
  ];

  const isCategories = (categoryId) => {
    // event.preventDefault();
    let tempCategories = { ...values };

    categories.find((category) => {
      if (categoryId === category.id) {
        tempCategories = { name: category.name, id: category.id };
      }
    });

    setValues({ ...values, categories: tempCategories });
  };

  return (
    <Card fullWidth={true} additionalClasses={"mr-6"}>
      {showModal ? (
        <ModalForm
          setShowModal={setShowModal}
          accessToken={accessToken}
          profile={profile}
          getTransactions={getTransactions}
          categories={categories}
          values={values}
          setValues={setValues}
          // handleCategoryChange={handleCategoryChange}
        />
      ) : (
        ""
      )}
      <div className=""></div>
      <MyTable
        data={transactions}
        columns={columns}
        profile={profile}
        categories={categories}
        values={values}
        setValues={setValues}
        isCategories={isCategories}
      />
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

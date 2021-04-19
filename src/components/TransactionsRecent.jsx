import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import ModalForm from "./ModalForm";
import Card from "./Card";
import MyTable from "./Table";

const TransactionsRecent = ({ accessToken, transactions }) => {
  const [showModal, setShowModal] = useState(false);

  const columns = ["category", "description", "created", "amount"];

  return (
    <Card fullWidth={true} additionalClasses={"mr-6"}>
      {showModal ? (
        <ModalForm setShowModal={setShowModal} accessToken={accessToken} />
      ) : (
        ""
      )}
      <div className=""></div>
      <h3 className="pb-8">Recent transactions</h3>
      <MyTable data={transactions} columns={columns} />
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

import React, { useState, useEffect } from "react";

import { GoPlus } from "react-icons/go";
import ModalForm from "./ModalForm";
import Card from "./Card";
import MyTable from "./Table";
import { FetchCategories } from "../services/api/Categories";

const TransactionsRecent = ({ accessToken, transactions, profile }) => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const columns = ["category", "description", "created", "amount"];

  useEffect(() => {
    const getCategories = async () => {
      const res = await FetchCategories(profile.id, accessToken);
      console.log(res);
      setCategories(res);
    };
    if (profile?.id) {
      getCategories();
    }
  }, []);

  return (
    <Card fullWidth={true} additionalClasses={"mr-6"}>
      {showModal ? (
        <ModalForm
          setShowModal={setShowModal}
          accessToken={accessToken}
          profile={profile}
          categoryList={categories}
        />
      ) : (
        ""
      )}
      <div className=""></div>
      <MyTable
        data={transactions}
        columns={columns}
        profile={profile}
        categoryList={categories}
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

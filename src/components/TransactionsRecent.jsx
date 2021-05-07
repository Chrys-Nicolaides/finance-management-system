import React, { useState, useEffect } from "react";

import { FetchCategories } from "../services/api/Categories";
import { GoPlus } from "react-icons/go";
import ModalForm from "./ModalForm";
import Card from "./Card";
import MyTable from "./Table";
import { ReactComponent as TransactionsPicDark } from "../images/TransactionsPicDark.svg";
import { ReactComponent as TransactionsPicLight } from "../images/TransactionsPicLight.svg";

const TransactionsRecent = ({
  accessToken,
  transactions,
  profile,
  darkTheme,
}) => {
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
    <div>
      <Card fullWidth={true} additionalClasses={"mr-6 overflow-auto"}>
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
        {transactions.length ? (
          <MyTable
            data={transactions}
            columns={columns}
            profile={profile}
            categoryList={categories}
          />
        ) : (
          <div className="flex flex-col">
            <h3 className="dark:text-gray-400 text-gray-600 pb-6 text-center">
              No transactions yet
            </h3>
            {darkTheme ? <TransactionsPicDark /> : <TransactionsPicLight />}
            <h2 className="dark:text-gray-500 text-gray-500 text-sm sm:text-lg text-center mt-8 ">
              Transactions will appear here.
            </h2>
            <h2 className="dark:text-gray-500 text-gray-500 text-sm sm:text-lg text-center">
              Let's add one now!
            </h2>
          </div>
        )}
        <div className="flex justify-end mt-auto">
          <button
            className="button-primary sm:flex hidden"
            onClick={() => setShowModal(!showModal)}
          >
            <GoPlus stroke="white" strokeWidth={0.2} className="mr-2" />
            Transaction
          </button>
        </div>
      </Card>
      {showModal ? (
        ""
      ) : (
        <div className="w-full justify-center flex sm:hidden h-full">
          <button
            className="button-primary w-16 h-16 rounded-full flex justify-center fixed bottom-12 z-10 object-bottom"
            onClick={() => setShowModal(!showModal)}
          >
            <GoPlus
              stroke="white"
              strokeWidth={0.2}
              className="items-center w-6 h-6"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionsRecent;

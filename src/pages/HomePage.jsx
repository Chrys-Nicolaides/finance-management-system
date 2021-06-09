import React, { useEffect, useState } from "react";
import { FetchTransactions } from "../services/api/Transaction";
import { FetchCategories } from "../services/api/Categories";
import {
  FetchProfileCategories,
  FetchProfileExpenses,
} from "../services/api/Profile";

import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";
import { DefaultLayout } from "./Layouts";
import Modal from "../components/Modal";
import { ReactComponent as Loading } from "../images/loading.svg";

const HomePage = ({ themeChange, darkTheme, accessToken, profile }) => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expensesCategories, setExpensesCategories] = useState([]);
  const [incomeExpenses, setIncomeExpenses] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await FetchTransactions(profile.id, accessToken, 1, 3);
      setTransactions(res);
      setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const res = await FetchCategories(profile.id, accessToken);
      setCategories(res);
    };
    if (profile?.id) {
      getCategories();
    }
  }, []);

  console.log(profile);
  console.log(profile);

  // reports

  useEffect(() => {
    const getExpensesCategories = async () => {
      const res = await FetchProfileCategories(profile.id, accessToken);
      console.log(res);
      setExpensesCategories(res);
    };
    if (profile?.id) {
      getExpensesCategories();
    }
  }, []);

  useEffect(() => {
    const getIncomeExpenses = async () => {
      const res = await FetchProfileExpenses(profile.id, accessToken);
      console.log(res);
      setIncomeExpenses(res);
    };
    if (profile?.id) {
      getIncomeExpenses();
    }
  }, []);

  //

  if (!window.navigator.platform.toLowerCase().includes("mac")) {
    import("../Font.css");
  }

  return (
    <DefaultLayout themeChange={themeChange} darkTheme={darkTheme}>
      {loading ? (
        <Modal>
          <Loading />
        </Modal>
      ) : (
        ""
      )}

      <Header />

      <div className="flex flex-col xl:flex-row-reverse mt-6 min-h-full gap-8 mb-8 md:mb-0">
        <div className="xl:mb-8 xl:w-1/3 flex-grow ">
          <Balance profile={profile} />
        </div>

        <div className="flex flex-col-reverse xl:flex-col xl:w-2/3 mx-4 md:mx-0">
          <div className="mb-1 sm:-mb-6">
            <h3 className="pb-6 pt-4 flex xl:hidden">Expenses Overview</h3>
            <Chart
              accessToken={accessToken}
              categories={categories}
              expensesCategories={expensesCategories}
              incomeExpenses={incomeExpenses}
              profile={profile}
              darkTheme={darkTheme}
              loading={loading}
              themeChange={themeChange}
              className="flex-grow"
            />
          </div>
          <div className="mb-8 sm:mb-8">
            <h3 className="pb-6 pt-4">Recent transactions</h3>
            <TransactionsRecent
              accessToken={accessToken}
              transactions={transactions}
              profile={profile}
              darkTheme={darkTheme}
              className="xl:flex-row xl:w-full flex-grow"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

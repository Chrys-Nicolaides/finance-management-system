import React, { useEffect, useState } from "react";

// import { CreateProfile, FetchProfile } from "../services/api/Profile";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";
import { DefaultLayout } from "./Layouts";
import Modal from "../components/Modal";
import { ReactComponent as Loading } from "../images/loading.svg";

import {
  FetchTransactions,
  CreateTransaction,
} from "../services/api/Transaction";

const HomePage = ({ themeChange, darkTheme, accessToken, profile }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await FetchTransactions(profile.id, accessToken, 1, 3);
      setTransactions(res);
      setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    }
  }, []);

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

      <div className="flex flex-col md:flex-row-reverse mt-6 min-h-full gap-8 mb-8 md:mb-0">
        <div className="md:mb-8 md:w-1/3 flex-grow ">
          <Balance profile={profile} />
        </div>

        <div className="flex flex-col-reverse md:flex-col md:w-2/3 mx-4 md:mx-0">
          <div className="mb-1 sm:-mb-6">
            <h3 className="pb-6 pt-4 flex sm:hidden">Expenses Overview</h3>
            <Chart
              accessToken={accessToken}
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
              className="md:flex-row md:w-full flex-grow"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

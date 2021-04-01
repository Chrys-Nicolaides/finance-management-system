import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import FetchProfile from "../FetchProfile";
import UpdateProfile from "../UpdateProfile";
import FetchTransactions from "../FetchTransactions";

const HomePage = ({ themeChange, darkTheme }) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently({
      audience: `https://finanzer.normans.co.za`,
      scope: "read:current_user",
    }).then((accessToken) => {
      const getRequests = (accessToken) => {
        let putBody = {
          balance: 200,
          currency: "euros",
        };
        // let postBody = {
        //   amount: 1000000,
        //   description: "One million Euros!!!",
        //   day: 6,
        //   recurring: false,
        //   recurringType: "monthly",
        //   currency: "euros",
        // };
        FetchProfile(1, accessToken);
        UpdateProfile(1, putBody);
        FetchTransactions(1);
        // await SaveTransaction(1, postBody);
      };
    });

    // getRequests();
  }, [getAccessTokenSilently]);
  return (
    <div className="pl-24 mx-6">
      <Navbar themeChange={themeChange} darkTheme={darkTheme} />
      <Dashboard />
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "../components/Navbar";
import { FetchProfile } from "../services/api/Profile";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";

const HomePage = ({ themeChange, darkTheme }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProfile = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUDIENCE,
        scopes: ["read:profile"]
      });
      const profileResponse = await FetchProfile(1, accessToken)
      setProfile(profileResponse)
      setLoading(false)
    }

    getProfile()
  }, [getAccessTokenSilently]);

  if (loading) {
    return ("Loading...")
  }

  return (
    <div className="pl-24 mx-6">
      <Navbar themeChange={themeChange} darkTheme={darkTheme} />
      <Header />
      <Balance profile={profile}/>
      <div className="flex flex-col md:flex-row pb-6 mt-32">
        <TransactionsRecent className="md:flex-row md:w-full md:order-1" />
        <Chart className="md:flex-row md:w-full" />
      </div>
    </div>
  );
};

export default HomePage;

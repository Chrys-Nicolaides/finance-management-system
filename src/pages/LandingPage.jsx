import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

import { ReactComponent as HeroImage } from "../images/hero-image.svg";
import LoginButton from "../components/auth-components/LoginButton";
import SignUpButton from "../components/auth-components/SignUpButton";
import Modal from "../components/Modal";

const LandingPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: import.meta.env.VITE_AUDIENCE,
          scopes: ["read:profile"],
        });
        if (accessToken) {
          history.push("/dashboard");
        }
      } catch (e) {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, [getAccessTokenSilently, history]);

  return (
    <div className="dark:text-gray-100 text-gray-800">
      <div className="temp-navbar flex bg-gray-100 dark:bg-gray-900 justify-between shadow-md h-10 md:h-16 xl:h-24">
        {loading ? <Modal>Loading...</Modal> : ""}
        <div className="flex">
          <div className="w-4 h-4 rounded-lg bg-indigo-500 justify-start self-center mx-16"></div>
          <h3 className="self-center flex justify-start">Finanzer</h3>
        </div>
        <div className="self-center mr-12">
          <LoginButton />
        </div>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-row p-14 items-center content-center w-full max-h-full">
        <div className="flex-first md:justify-start md:ml-20 md:w-1/2">
          <h1 className="display-primary dark:text-white">
            Manage your finances on the go.
          </h1>
          <h2 className="display-secondary pb-14 pt-4 dark:text-gray-400 text-gray-500">
            Or something nice like that.
          </h2>
          <div className="flex flex-col">
            <SignUpButton />
          </div>
        </div>
        <div className="flex-last md:justify-end md:w-1/2 rounded-lg">
          <HeroImage className="w-full p-20 md:w-full md:p-0 xl:p-20" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

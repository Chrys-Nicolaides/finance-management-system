import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";

function App() {
  const [data, setData] = useState([]);

  // dark mode
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

  // GET request

  const getTransactions = async (id) => {
    const response = await fetch(
      `https://finanzer.normans.co.za/profile/${id}/transactions`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("id:", id);
    return data;
  };
  console.log("it's happening", data);

  useEffect(() => {
    getProfile(1);
    getTransactions(1)
      .then((data) => setData(data))
      .catch((error) => console.log("GET error", error));
    saveTransaction(1);
    updateProfile(1);
  }, []);

  // POST request

  const saveTransaction = async (id) => {
    fetch(`https://finanzer.normans.co.za/profile/${id}/transactions`, {
      method: "POST",
      body: JSON.stringify({
        amount: 10,
        description: "This is a awesome purchase",
        day: 2,
        recurring: true,
        recurringType: "monthly",
        currency: "euros",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("POST result", result);
      })
      .catch((error) => console.log("POST error", error));
  };

  // GET profile request

  const getProfile = async (id) => {
    fetch(`https://finanzer.normans.co.za/profile/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("GET 2 result", result);
      })
      .catch((error) => console.log("GET profile error", error));
  };

  // PUT profile request

  const updateProfile = async (id) => {
    fetch(`https://finanzer.normans.co.za/profile/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 3,
        balance: 60.39,
        currency: "euros",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("PUT result", result);
      })
      .catch((error) => console.log("PUT profile error", error));
  };

  // rest of code

  return (
    <div
      className={"App min-h-screen fixed inset-0" + (darkTheme ? " dark" : "")}
    >
      <div className="dark:bg-gray-900 dark:text-gray-100 text-gray-800 h-full">
        <Navbar />
        <LandingPage themeChange={themeChange} darkTheme={darkTheme} />
        {/* <button
          className="button-secondary p-1.5 ml-14 -mt-96 mb-96"
          onClick={() => saveTransaction()}
        >
          POST!
        </button> */}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage";

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

  const getTransactions = async () => {
    const response = await fetch(
      "https://finanzer.normans.co.za/transactions",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  };

  console.log("it's happening", data);

  useEffect(() => {
    getTransactions()
      .then((data) => setData(data))
      .catch((error) => console.log("GET error", error));
  }, []);

  // POST request

  const saveTransaction = async () => {
    fetch("https://finanzer.normans.co.za/transactions", {
      method: "POST",
      body: JSON.stringify({
        amount: 12,
        description: "test transaction2",
        day: 3,
        recurring: false,
        recurringType: false,
        currency: "euros",
        id: 4,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("POST result", result);
      })
      .catch((error) => console.log("POST error", error));
  };

  // GET profile request

  const getProfile = async () => {
    fetch("https://finanzer.normans.co.za/transactions", {
      method: "GET",
      id: Number,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("GET 2 result", result);
      })
      .catch((error) => console.log("GET profile error", error));
  };

  // PUT profile request

  const saveProfile = async () => {
    fetch("https://finanzer.normans.co.za/transactions", {
      method: "PUT",
      id: Number,
      body: JSON.stringify({
        id: 10,
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
    <div className={"App" + (darkTheme ? " dark" : "")}>
      <div className="dark:bg-black dark:text-gray-100 text-gray-800">
        <button onClick={() => themeChange()}>
          {darkTheme ? "dark mode" : "light mode"}
        </button>
        <button onClick={() => saveTransaction()}>POST!</button>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;

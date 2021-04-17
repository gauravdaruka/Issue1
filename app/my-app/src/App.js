import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./dmAxios";

const App = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("Click button!!!");

  useEffect(() => {
    axios.get("WindowsIdentity").then((data) => {
      setUserName(data.data.loggedin_username);
    });
  }, []);

  const onPostHandler = () => {
    axios
      .post("WindowsIdentity", { firstname: "Aditya", lastname: "Daruka" })
      .then((data) => {
        setMessage(data.data.message);
      })
      .catch((err) => {
        setMessage("Error while issuing Post");
      });
  };

  const onDeleteHandler = () => {
    axios
      .delete("WindowsIdentity")
      .then((data) => {
        setMessage(data.data.message);
      })
      .catch((err) => {
        setMessage("Error while issuing Delete");
      });
  };

  return (
    <div className="App">
      <p>Logged In User: {userName}</p>
      <button onClick={onPostHandler}>Post</button>
      <button onClick={onDeleteHandler}>Delete</button>
      <p>{message}</p>
    </div>
  );
};

export default App;

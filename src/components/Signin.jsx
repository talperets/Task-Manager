import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allContext } from "../App";
export default function Signin({ setShowMenu }) {
  const context = useContext(allContext);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const validate = () => {
    fetch("/find", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.messege === "not found") {
          alert("try again");
        } else {
          context.setCurrentUser(username);
          setShowMenu(true);
          nav("/alltasks");
        }
      });
  };

  return (
    <div>
      <input
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={validate}>Sign in</button>
    </div>
  );
}

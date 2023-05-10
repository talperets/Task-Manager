import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyTasks({ addTask }) {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [worker, setWorker] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <input
        onChange={(e) => setWorker(e.target.value)}
        type="text"
        placeholder="Worker"
      />
      <button
        onClick={() => {
          addTask(name, desc, worker);
          nav("/alltasks");
        }}
      >
        Add
      </button>
    </div>
  );
}

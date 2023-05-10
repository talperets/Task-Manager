import React, { useContext } from "react";
import { allContext } from "../App";

export default function TaskDetails({ setShowDetails, val }) {
  const context = useContext(allContext);
  const finishTask = () => {
    fetch("/finishtask", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name: val.name,
        desc: val.desc,
        worker: val.worker,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.setgetData(!context.getData);
      });
  };
  return (
    <div>
      <button onClick={() => setShowDetails(false)}>X</button>
      <h3>{val.wroker}</h3>
      <p>{val.desc}</p>
      <button onClick={finishTask}>Finished</button>
    </div>
  );
}

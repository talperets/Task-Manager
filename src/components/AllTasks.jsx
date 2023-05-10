import React from "react";
import Task from "./Task";

export default function AllTasks({ taskArr }) {
  return (
    <div>
      {taskArr.map((val) => {
        return <Task val={val} />;
      })}
    </div>
  );
}

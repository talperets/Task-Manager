import React, { useContext } from "react";
import Task from "./Task";
import { allContext } from "../App";

export default function MyTasks({ taskArr }) {
  const context = useContext(allContext);
  const afterFilter = taskArr.filter((val) => {
    return val.worker === context.currentUser;
  });

  return (
    <div>
      {afterFilter.map((val) => {
        return <Task val={val} />;
      })}
    </div>
  );
}

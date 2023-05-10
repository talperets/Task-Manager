import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

export default function Task({ val }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div onClick={() => setShowDetails(!showDetails)} className="task">
      <h3>{val.name}</h3>
      <h3>{val.worker}</h3>
      {showDetails ? (
        <TaskDetails val={val} setShowDetails={setShowDetails} />
      ) : null}
    </div>
  );
}

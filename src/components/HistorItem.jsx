import React from "react";

export default function HistoryItem({ val }) {
  return (
    <div className="task">
      <h3>{val.name}</h3>
      <h3>{val.worker}</h3>
      <p>{val.desc}</p>
    </div>
  );
}

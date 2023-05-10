import React from "react";
import HistoryItem from "./HistorItem";

export default function History({ finishedTaskArr }) {
  return (
    <div>
      {finishedTaskArr.map((val) => {
        return <HistoryItem val={val} />;
      })}
    </div>
  );
}

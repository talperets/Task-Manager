import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ setShowMenu }) {
  return (
    <div>
      <Link to="/alltasks">
        <button>All Tasks</button>
      </Link>
      <Link to="/mytasks">
        <button>My Tasks</button>
      </Link>
      <Link to="/newtask">
        <button>New Task</button>
      </Link>
      <Link to="/history">
        <button>History</button>
      </Link>
      <Link to="/">
        <button onClick={() => setShowMenu(false)}>Exit</button>
      </Link>
    </div>
  );
}

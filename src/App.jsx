import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import AllTasks from "./components/AllTasks";
import History from "./components/History";
import MyTasks from "./components/MyTasks";
import NewTask from "./components/NewTask";
import Menu from "./components/Menu";
export const allContext = React.createContext();
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [taskArr, setTaskArr] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [finishedTaskArr, setFinishedTaskArr] = useState([]);
  const [getData, setgetData] = useState(false);
  const addTask = (name, desc, worker) => {
    // setTaskArr([...taskArr, { name: name, desc: desc, worker: worker }]);
    fetch("/sendtask", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name,
        desc,
        worker,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setgetData(!getData);
      });
  };
  useEffect(() => {
    fetch("/getalltasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTaskArr(data));
  }, [getData]);
  useEffect(() => {
    fetch("/getfinishedtasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => setFinishedTaskArr(data));
  }, [getData]);

  return (
    <>
      <allContext.Provider
        value={{ setgetData, getData, currentUser, setCurrentUser }}
      >
        <BrowserRouter>
          {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
          <Routes>
            <Route path="/" element={<Signin setShowMenu={setShowMenu} />} />
            <Route path="/alltasks" element={<AllTasks taskArr={taskArr} />} />
            <Route path="/mytasks" element={<MyTasks taskArr={taskArr} />} />
            <Route path="/newtask" element={<NewTask addTask={addTask} />} />
            <Route
              path="/history"
              element={<History finishedTaskArr={finishedTaskArr} />}
            />
          </Routes>
        </BrowserRouter>
      </allContext.Provider>
    </>
  );
}

export default App;

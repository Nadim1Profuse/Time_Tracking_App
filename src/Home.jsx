import * as React from "react";
import Header from "./Header";
import TimerCard from "./Timer/TimerCard";
import TaskList from "./TaskList/TaskList";

function Home(props) {
  const headingStyle = {
    fontFamily: "Orbitron",
    fontWeight: "bold",
    margin: "5px",
  };
  return (
    <>
      <Header />
      <h6 style={headingStyle}>Time Tracking App</h6>
      <TimerCard />
      <TaskList />
    </>
  );
}

export default Home;

import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
const Singletask = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  height: 8vh;
  .sub {
    color: #525252;
  }
  .text {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 5vw;
  }
  background-color: #e9dac1;
  h3 {
    font-family: "Titillium Web", sans-serif;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  input {
    margin-right: 5vw;
  }
  @media (max-width: 1300px) {
    width: 50vw;
    height: 10vh;
  }
  @media (max-width: 700px) {
    width: 70vw;
    height: 11vh;
  }
  @media (max-width: 410px) {
    width: 80vw;
    height: 12vh;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export const SingleTask = (props) => {
  const taskTimeString = props.due;
  const taskTimeNumber = props.due.split(":");
  const taskHour = taskTimeNumber[0];
  const taskMinutes = taskTimeNumber[1];
  const inputTasktime = parseInt(taskHour) * 60 + parseInt(taskMinutes);
  const [displayTime, setDisplaytime] = useState(inputTasktime);
  const MINUTES_MS = 60000;
  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date();
      var timeCurr =
        parseInt(today.getHours()) * 60 + parseInt(today.getMinutes());

      var totalTime = inputTasktime - timeCurr;
      setDisplaytime(totalTime);
    }, MINUTES_MS);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (e) => {
    props.onDelete(props.id);
    e.preventDefault();
  };
  if (displayTime > 0) {
    return (
      <Singletask>
        <div className="text">
          <h3>
            <span className="sub">Task : </span>
            {props.data}
          </h3>
          <p>Due at : {taskTimeString}</p>
        </div>
        <input type="checkbox" onClick={handleClick} name="" id="" />
      </Singletask>
    );
  } else {
    var newTime = -1 * displayTime;
    var mins = newTime % 60;
    var hours = parseInt(newTime / 60);
    return (
      <Singletask>
        <div className="text">
          <h3>Task : {props.data}</h3>
          <p>Late by : {hours + " hour and " + mins + " minutes"}</p>
        </div>
        <input type="checkbox" onClick={handleClick} name="" id="" />
      </Singletask>
    );
  }
};
export default SingleTask;

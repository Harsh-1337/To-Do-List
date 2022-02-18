import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import sound from "../sounds/mixkit-alert-bells-echo-765.wav";
import swal from "sweetalert";
const Singletask = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  height: 8vh;
  box-shadow: 10px 10px #b980f0;
  transition: width 0.5s, height 1s;
  :hover {
    box-shadow: 15px 15px #fed1ef;
    width: 35vw;
    height: 10vh;
  }
  .sub {
    color: #525252;
  }
  .text {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 5vw;
  }
  background-color: #b5deff;
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
    cursor: pointer;
    margin-right: 5vw;
  }
  @media (max-width: 1300px) {
    width: 50vw;
    height: 10vh;
    :hover {
      box-shadow: 15px 15px #1c6dd0;
      width: 55vw;
      height: 12vh;
    }
  }
  @media (max-width: 700px) {
    width: 70vw;
    height: 11vh;
    :hover {
      box-shadow: 15px 15px #1c6dd0;
      width: 75vw;
      height: 14vh;
    }
  }
  @media (max-width: 410px) {
    width: 80vw;
    height: 12vh;
    :hover {
      box-shadow: 15px 15px #1c6dd0;
      width: 85vw;
      height: 15vh;
    }
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
      if (totalTime <= 0 && totalTime > -1) {
        swal(`${props.data} is Due`, ``, `info`);
        const audio = new Audio(sound);
        audio.play();
      }
      setDisplaytime(totalTime);
    }, MINUTES_MS);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (e) => {
    swal(`Task Completed`, ``, `success`);
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

import React from "react";
import styled from "styled-components";
const Singletask = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30vw;
  height: 8vh;
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
`;
export const SingleTask = (props) => {
  var today = new Date();
  var timeCurr = parseInt(today.getHours()) * 60 + parseInt(today.getMinutes());
  var time = props.due.split(":");
  var hour = time[0];
  if (hour === "00") {
    hour = 24;
  }
  var min = time[1];
  var inputTime = parseInt(hour) * 60 + parseInt(min);
  var totalTime = inputTime - timeCurr;

  if (totalTime > 0) {
    return (
      <Singletask>
        <div>
          <h3>Task : {props.data}</h3>
          <p>Due at : {props.due}</p>
        </div>
        <input type="checkbox" name="" id="" />
      </Singletask>
    );
  } else {
    totalTime = -1 * totalTime;
    var mins = totalTime % 60;
    var hours = parseInt(totalTime / 60);
    return (
      <Singletask>
        <div>
          <h3>Task : {props.data}</h3>
          <p>Late by : {hours + " hour and " + mins + " minutes"}</p>
        </div>
        <input type="checkbox" name="" id="" />
      </Singletask>
    );
  }
};
export default SingleTask;

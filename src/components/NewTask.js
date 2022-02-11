import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TaskList from "./TaskList";
const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    padding: 0 0 1rem 0;
  }
  input {
    width: 20vw;
    height: 4vh;
    border: none;
    background-color: #f7ecde;
    margin-right: 2rem;
  }
  button {
    position: relative;
    float: right;
    margin-right: 10px;
    color: #54bab9;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
  }
`;
export const NewTask = () => {
  const [num, setNum] = useState(0);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    let name = e.target.name;
    if (name === "task") {
      let a = e.target.value;
      setTask(a);
    } else {
      let a = e.target.value;
      setTime(a);
    }
  };
  const handleSubmit = (e) => {
    setNum((prevNum) => {
      return prevNum + 1;
    });
    var today = new Date();
    var timeCurr =
      parseInt(today.getHours()) * 60 + parseInt(today.getMinutes());
    var time1 = time.split(":");
    var hour = time1[0];
    if (hour === "00") {
      hour = 24;
    }
    var min = time1[1];
    var inputTime = parseInt(hour) * 60 + parseInt(min);
    var totalTime = inputTime - timeCurr;
    if (totalTime > 0) {
      setTasks((prevNote) => {
        let obj = {
          newTask: task,
          newTime: time,
        };
        return [...prevNote, obj];
      });
    } else {
      alert("Invalid time");
    }
    e.preventDefault();
  };
  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <div>
          <label>Enter New Task :</label>
          <div>
            <input name="task" type="text" onChange={handleChange} />
            <input name="time" type="time" onChange={handleChange} />
            <button type="submit">
              <AddIcon />
            </button>
          </div>
        </div>
      </Wrapper>
      <TaskList list={tasks} taskNumber={num} />
    </>
  );
};
export default NewTask;

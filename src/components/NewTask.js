import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TaskList from "./TaskList";
const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  //flex-direction: column;
  align-items: center;
  label {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    margin-right: 0.8vw;
  }

  input {
    width: 20vw;
    height: 4vh;
    border: none;
    background-color: #f7ecde;
    margin-right: 1.6vw;
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
  @media (max-width: 1300px) {
    input {
      width: 30vw;
      height: 4.5vh;
    }
  }
  @media (max-width: 1100px) {
    label {
      font-size: 1rem;
    }
  }
  @media (max-width: 550px) {
    input {
      width: 70vw;
      height: 4.5vh;
      margin-bottom: 1.3vh;
    }
    label {
      margin-bottom: 1.3vh;
    }
    flex-direction: column;
  }
`;
export const NewTask = () => {
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
    if (totalTime > 0 && task !== "") {
      setTasks((prevNote) => {
        let obj = {
          newTask: task,
          newTime: time,
        };
        setTask("");
        setTime("");
        return [...prevNote, obj];
      });
    } else {
      if (task === "") {
        alert("Please Input Task");
      } else {
        alert("Invalid time");
        setTime("");
      }
    }
    e.preventDefault();
  };
  const deleteTask = (id) => {
    setTasks((prevList) => {
      return prevList.filter((task, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <label>Enter New Task :</label>
        <input name="task" type="text" value={task} onChange={handleChange} />
        <label>Enter Time :</label>
        <input name="time" type="time" value={time} onChange={handleChange} />
        <button type="submit">
          <AddIcon />
        </button>
      </Wrapper>
      <TaskList list={tasks} deleteOne={deleteTask} />
    </>
  );
};
export default NewTask;

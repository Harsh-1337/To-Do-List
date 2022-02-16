import React from "react";
import styled from "styled-components";
import SingleTask from "./SingleTask";
const MyList = styled.div`
  padding-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const TaskList = (props) => {
  let List = props.list;

  return (
    <MyList>
      {List.map((item, index) => {
        return (
          <SingleTask
            data={item.newTask}
            due={item.newTime}
            onDelete={props.deleteOne}
            key={index}
            id={index}
          />
        );
      })}
    </MyList>
  );
};
export default TaskList;

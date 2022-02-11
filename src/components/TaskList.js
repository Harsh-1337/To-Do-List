import React from "react";
import styled from "styled-components";
import SingleTask from "./SingleTask";
const MyList = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const TaskList = (props) => {
  const List = props.list;
  return (
    <MyList>
      {List.map((item, index) => {
        return (
          <SingleTask data={item.newTask} due={item.newTime} key={index} />
        );
      })}
    </MyList>
  );
};
export default TaskList;

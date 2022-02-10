import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #e9dac1;
  h1 {
    margin-top: 0;
    padding-top: 4vh;
    padding-bottom: 2vh;
    text-align: center;
    font-family: "Bebas Neue", cursive;
    font-size: 5rem;
    color: ;
  }
`;
export const Header = () => {
  return (
    <Wrapper>
      <h1>To Do List</h1>
    </Wrapper>
  );
};
export default Header;

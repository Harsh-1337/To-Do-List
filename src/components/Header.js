import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400|Inconsolata:400");
  background-color: #1c6dd0;
  display: flex;
  justify-content: center;
  align-items: center;

  .threeD {
    padding-bottom: 0;
    text-align: center;
    color: darkgrey;
    //white-space: nowrap;
    //position: absolute;
    // top: 50%;
    //left: 50%;
    transform: translate(0%, 0%);
    font-size: 5rem;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    transition: 0.3s;
    text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
      1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
      5px 13px 15px black;
  }

  .threeD:hover {
    transition: 0.3s;
    transform: scale(1.1) translate(-10%, -10%);
    text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
      1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
      1px -8px 0 grey, 5px -13px 15px black, 5px -13px 25px #808080;
  }
  @media (max-width: 1000px) {
    .threeD {
      font-size: 4rem;
    }
  }
  @media (max-width: 700px) {
    .threeD {
      font-size: 3rem;
    }
  }
  margin-bottom: 5vh;
`;
export const Header = () => {
  return (
    <Wrapper>
      <h1 className="threeD">To Do List</h1>
    </Wrapper>
  );
};
export default Header;

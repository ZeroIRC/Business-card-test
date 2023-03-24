import React from "react";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;

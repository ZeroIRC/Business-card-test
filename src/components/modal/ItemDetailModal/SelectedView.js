import React from "react";
import styled from "styled-components";
const SelectetdBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  height: 15px;
  background: #edf0f4;
  color: #191919;
  font-size: 12px;
  font-family: "YoonGothicPro740", "dotum", "돋움", "Arial", "sans-serif";
  text-rendering: auto !important;
`;
const SelectetdCount = styled.em`
  color: #2c83e9;
  font-style: normal;
  font-weight: normal;
`;

const SelectedView = ({ selectItems, count }) => {
  return (
    <SelectetdBox>
      원하는 뒷면 디자인을 선택해주세요(
      <SelectetdCount>{selectItems}</SelectetdCount>/{count}개)
    </SelectetdBox>
  );
};

export default SelectedView;

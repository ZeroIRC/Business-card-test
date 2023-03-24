import React from "react";
import styled from "styled-components";

const BottomBox = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
`;

const SubmitButton = styled.div`
  height: 50px;
  display: table-cell;
  vertical-align: middle;
  outline: none;
  width: 230px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  user-select: none;
  background-color: ${({ active }) => (active ? "#2c83e9" : "#c7cdd3")};
  font-size: 12px;
  font-family: "YoonGothicPro740", "dotum", "돋움", "Arial", "sans-serif";
  cursor: ${({ active }) => (active ? "pointer" : "default ")};
  font-weight: bold;
  text-rendering: auto !important;
`;

const LikeBtn = styled.div`
  background: url(${(props) => props.src}) 0px 0px / cover no-repeat;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  ${({ active }) => {
    return active
      ? `background : #2c83e9 url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-y-b-2424-3x.png") 50% 50%/24px 24px no-repeat`
      : `background : #2c83e9 url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-w-b-2424-3x.png") 50% 50%/24px 24px no-repeat;`;
  }}
`;

const SubmitView = ({ selectItems, setPopup, id, toggleLike, likeData }) => {
  return (
    <BottomBox>
      <SubmitButton
        active={selectItems >= 1}
        onClick={() => {
          if (selectItems >= 1) {
            setPopup(false);
          }
        }}
      >
        디자인 선택
      </SubmitButton>
      <LikeBtn
        onClick={() => toggleLike(id)}
        active={likeData?.hasOwnProperty(id) ? true : false}
      ></LikeBtn>
    </BottomBox>
  );
};

export default SubmitView;

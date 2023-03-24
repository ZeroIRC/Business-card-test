import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  width: 360px;
  height: 480px;
  flex-direction: column;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    transition: all 0.45s ease-out;
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 360px;
  height: 440px;
  overflow: hidden;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  object-fit: cover;
  background: center center / contain no-repeat rgb(242, 244, 247);
`;
const TemplateCnt = styled.div`
  font-family: "YoonGothicPro760";
  font-size: 11px;
  color: #191919;
  text-align: center;
  position: absolute;
  border-radius: 3px;
  border: solid 1px #ddd;
  height: 26px;
  left: 15px;
  bottom: 15px;
  padding: 6px 6px 6px 6px;
  background-color: #fff;
  box-sizing: border-box;
  opacity: 0;
  font-family: "YoonGothicPro760";
  ${ItemContainer}:hover & {
    opacity: 1;
    transition: all 0.45s ease-out;
  }
`;
const TilteBox = styled.div`
  display: flax;
  justify-content: space-between;
  height: 40px;
  padding: 10px;
`;

const Title = styled.div`
  position: relative;
  height: 40px;
  line-height: 40px;
  margin: 0 15px 0 15px;
  width: 296px;
  color: #191919;
  font-size: 12px;
  font-family: "YoonGothicPro740", "dotum", "돋움", "Arial", "sans-serif";
  text-rendering: auto !important;
`;
const LikeBtn = styled.div`
  width: 24px;
  height: 24px;
  margin: 8px 0;
  ${({ active }) => {
    return active
      ? `background : url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-y-2424-3x.png") 0% 0% / cover no-repeat;`
      : `background : url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/png/good-b-2424-3x.png") 0% 0% / cover no-repeat;`;
  }};
  position: absolute;
  top: 0;
  right: -20px;
  display: inline-block;
  line-height: 20px;
  cursor: pointer;
`;

const MainItem = ({
  itemList,
  setSelectId,
  setPopup,
  likeData,
  toggleLike,
}) => {
  return itemList?.map((item) => {
    return (
      <ItemContainer key={item.id}>
        <ImageBox
          onClick={() => {
            setSelectId(item.id);
            setPopup(true);
          }}
        >
          <Image src={item.thumbnail}></Image>
          <TemplateCnt>{item.count}가지 디자인</TemplateCnt>
        </ImageBox>
        <TilteBox>
          <Title>
            {item.title}
            <LikeBtn
              onClick={() => toggleLike(item.id)}
              active={likeData?.hasOwnProperty(item.id) ? true : false}
            />
          </Title>
        </TilteBox>
      </ItemContainer>
    );
  });
};

export default MainItem;

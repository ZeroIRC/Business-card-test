import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  justify-content: center;
  position: relative;
  text-align: left;
  padding: 43px 30px 24px 30px;
`;

const TitleBox = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  line-height: 28px;
  font-family: "YoonGothicPro760";
  font-weight: bold;
  word-break: break-all;
`;
const DescBox = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  padding-bottom: 20px;
`;
const TemplateCntBox = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  color: #191919;
  white-space: pre-wrap;
  padding-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: table;
`;
const InfoBox = styled.div`
  margin-bottom: 8px;
`;

const Info = styled.span`
  font-size: 11px;
  line-height: 1.82;
  background: none;
  color: #191919;
  position: relative;
  padding-left: 5px;
  ::before {
    position: absolute;
    display: inline-block;
    top: 6px;
    left: 0;
    width: 3px;
    height: 3px;
    vertical-align: middle;
    content: "";
    background: #2c83e9;
  }
`;

const ContentView = ({ data }) => {
  return (
    <ContentBox>
      <TitleBox>{data.title}</TitleBox>
      <DescBox>{data.content}</DescBox>
      <TemplateCntBox>
        {`하나의 앞면 디자인에\n`}
        <b>{data.count}가지</b>
        {` 디자인이\n한 세트인 상품입니다.`}
      </TemplateCntBox>
      <InfoContainer>
        <InfoBox>
          <Info>상품 : {data.category}</Info>
        </InfoBox>
        <InfoBox>
          <Info>옵션 : {data.option}</Info>
        </InfoBox>
      </InfoContainer>
    </ContentBox>
  );
};

export default ContentView;

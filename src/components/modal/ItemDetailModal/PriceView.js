import React from "react";
import styled from "styled-components";
import useCountUp from "../../../hooks/useCountUp";

const PriceContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  padding: 0 30px;
  height: 61px;
  width: 220px;
  display: flex;
`;

const PriceNameBox = styled.div`
  border-top: 1px solid #ddd;
  height: 60px;
  width: 100px;
  font-size: 11px;
  font-family: "YoonGothicPro760";
  color: #191919;
  text-align: left;
  line-height: 60px;
  font-weight: bold;
`;
const PriceBox = styled.div`
  border-top: 1px solid #ddd;
  height: 60px;
  width: 120px;
  text-align: right;
  line-height: 60px;
  color: #e5362c;
  font-size: 13px;
  font-family: "YoonGothicPro760";
  font-weight: bold;
`;

const PriceView = ({ price }) => {
  const calculatedPrice = useCountUp(price);

  return (
    <PriceContainer>
      <PriceNameBox>가격</PriceNameBox>
      <PriceBox>{calculatedPrice.toLocaleString("ko-KR")}원</PriceBox>
    </PriceContainer>
  );
};

export default PriceView;

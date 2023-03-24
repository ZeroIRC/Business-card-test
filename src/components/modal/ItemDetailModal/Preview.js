import React from "react";
import styled from "styled-components";

const ImageView = styled.div`
  display: table-cell;
  vertical-align: middle;
  justify-content: center;
  text-align: center;
`;
const PreviewBox = styled.div`
  text-align: center;
  justify-content: center;
  width: 860px;
  height: 442px;
  display: table;
  position: relative;
`;
const Image = styled.img`
  background: url(${({ src }) => src}) 0px 0px / cover no-repeat;
  width: 230px;
  height: 230px;
  box-shadow: 2px 4px 6px 0 rgb(0 0 0 / 20%);
  -webkit-user-drag: none;
`;
const Preview = ({ image }) => {
  return (
    <PreviewBox>
      <ImageView>
        <Image src={image}></Image>
      </ImageView>
    </PreviewBox>
  );
};

export default Preview;

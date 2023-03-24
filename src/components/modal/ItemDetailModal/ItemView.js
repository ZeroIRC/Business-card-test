import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  height: 150px;
  background: #edf0f4;
  border-top: 1px solid #ddd;
  text-align: center;
  overflow: hidden;
  overflow-x: auto;
  padding: 15px 12px 0px;
`;
const ItemBox = styled.div`
  width: 836px;
  text-align: center;
`;
const Item = styled.img`
  width: 80px;
  height: 80px;
  -webkit-user-drag: none;
`;
const FrontItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 12px;
  outline: ${({ active }) => (active ? "1px solid #191919" : "")};
`;
const BackItemBox = styled.div`
  position: relative;
  display: inline-block;
  width: 104px;
  height: 130px;
`;
const BackItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 12px;
  outline: ${({ active }) => (active ? "1px solid #191919" : "")};
`;

const CheckBox = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 104px;
  height: 19px;
  margin: 0px 0px 4px;
`;
const InputCheckBox = styled.input`
  position: absolute;
  display: table-cell;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 16px;
  cursor: pointer;
  pointer-events: all;
  z-index: 3;
`;

const ItemView = ({
  items,
  selectIndex,
  setSelectIndex,
  handleselectItems,
}) => {
  return (
    <SelectContainer>
      <ItemBox key={"itemBox"}>
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <FrontItem
                key={index}
                onClick={() => {
                  setSelectIndex(index);
                }}
                active={index === selectIndex}
              >
                <Item src={items[index]} />
              </FrontItem>
            );
          } else {
            return (
              <BackItemBox key={index}>
                <CheckBox onChange={handleselectItems}>
                  <InputCheckBox type="checkbox" />
                </CheckBox>
                <BackItem
                  onClick={() => {
                    setSelectIndex(index);
                  }}
                  active={index === selectIndex}
                >
                  <Item src={items[index]} />
                </BackItem>
              </BackItemBox>
            );
          }
        })}
      </ItemBox>
    </SelectContainer>
  );
};

export default ItemView;

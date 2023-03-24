import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Preview from "./ItemDetailModal/Preview";
import ContentView from "./ItemDetailModal/ContentView";
import PriceView from "./ItemDetailModal/PriceView";
import SelectedView from "./ItemDetailModal/SelectedView";
import ItemView from "./ItemDetailModal/ItemView";
import SubmitView from "./ItemDetailModal/SubmitView";
import Loading from "../Loading";
import useItemQuery from "../../hooks/useItemQuery";

const ModalBackground = styled.div`
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
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  position: absolute;
  text-align: center;
  width: 1140px;
  height: 620px;
  display: flex;
`;
const LeftBox = styled.div`
  position: relative;
  float: left;
  width: 860px;
  height: 620px;
  user-select: none;
  -webkit-user-drag: none;
  background: #f2f4f7;
`;

const RightBox = styled.div`
  background-color: #f9fafc;
  width: 280px;
  height: 620px;
  float: right;
  position: relative;
  display: block;
`;

const CloseBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const CloseBtn = styled.div`
  background: url("https://front-cdn.ohprint.me/assets/ko_kr/pc/images/icon/icon-sprite.svg?v=1678424072228")
    no-repeat;
  content: "";
  display: inline-block;
  background-position: 56.23547637490318% 96.80710172744722%;
  width: 16px;
  height: 16px;
  font-size: 100%;
  outline: none;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ItemDetailModal = ({
  handleClickOutside,
  setPopup,
  modalEl,
  likeData,
  id,
  toggleLike,
}) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectItems, setSelectItems] = useState(0);
  const { data, isloading } = useItemQuery(id);

  const handleselectItems = (event) => {
    setSelectItems(selectItems + (event.target.checked ? +1 : -1));
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      {isloading ? null : <Loading />}
      {data ? (
        <ModalBackground ref={modalEl}>
          <ModalContainer>
            <LeftBox>
              <Preview image={data.item[selectIndex]} />
              <ItemView
                items={data.item}
                selectIndex={selectIndex}
                setSelectIndex={setSelectIndex}
                handleselectItems={handleselectItems}
              />
              <SelectedView selectItems={selectItems} count={data.count} />
            </LeftBox>
            <RightBox>
              <ContentView data={data} />
              <PriceView price={data.price} />
              <SubmitView
                selectItems={selectItems}
                setPopup={setPopup}
                toggleLike={toggleLike}
                id={data.id}
                likeData={likeData}
              />
            </RightBox>
            <CloseBox onClick={() => setPopup(false)}>
              <CloseBtn />
            </CloseBox>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </div>
  );
};
export default ItemDetailModal;

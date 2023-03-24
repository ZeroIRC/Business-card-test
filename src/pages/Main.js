import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import MainItem from "../components/MainItem";
import useModal from "../hooks/useModal";
import useItemQuery from "../hooks/useItemQuery";
import useLike from "../hooks/useLike";
const ItemDetailModal = React.lazy(() =>
  import("../components/modal/ItemDetailModal")
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1200px;
  height: 960px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1140px;
  height: 960px;
`;

export const Main = () => {
  const [popup, setPopup, modalEl, handleClickOutside] = useModal(false);
  const { data: itemList, isLoading } = useItemQuery();
  const [selectId, setSelectId] = useState(null);
  const [likeData, toggleLike] = useLike();

  return (
    <Wrapper>
      <Suspense fallback={<Loading />}>
        {popup && (
          <ItemDetailModal
            handleClickOutside={handleClickOutside}
            setPopup={setPopup}
            modalEl={modalEl}
            id={selectId}
            likeData={likeData}
            toggleLike={toggleLike}
          />
        )}
      </Suspense>
      <Container>
        {isLoading ? null : <Loading />}
        {isLoading && itemList && (
          <MainItem
            itemList={itemList.item}
            setSelectId={setSelectId}
            setPopup={setPopup}
            likeData={likeData}
            toggleLike={toggleLike}
          />
        )}
      </Container>
    </Wrapper>
  );
};
export default Main;

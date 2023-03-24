import { useEffect, useState, useRef } from "react";

export const useModal = (state) => {
  const [popup, setPopup] = useState(state);
  const modalEl = useRef();

  const handleClickOutside = ({ target }) => {
    if (popup && modalEl.current === target) setPopup(false);
  };

  useEffect(() => {
    popup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [popup]);

  return [popup, setPopup, modalEl, handleClickOutside];
};
export default useModal;

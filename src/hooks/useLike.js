import { useEffect, useState } from "react";

const useLike = () => {
  const [data, setData] = useState(null);

  const toggleLike = (targetId) => {
    if (data?.hasOwnProperty(targetId)) {
      const newData = Object.assign({}, data);
      delete newData[targetId];
      localStorage.setItem("like", JSON.stringify(newData));
      setData(newData);
    } else {
      setData({
        ...data,
        [targetId]: true,
      });
    }
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("like"));
    if (!localData) {
      setData({});
    } else {
      setData(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(data));
  }, [data]);

  return [data, toggleLike];
};

export default useLike;

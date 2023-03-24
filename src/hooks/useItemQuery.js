import { useEffect, useState } from "react";
import { get, getAll } from "../apis/item";

const useItemQuery = (targetId = "") => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const itemGetQuery = async (id) => {
    let response = null;
    setLoading(false);
    if (!id) {
      response = await getAll();
    } else {
      response = await get(id);
    }
    if (response.status === 200) {
      setData(await response.json());
      setLoading(true);
    } else {
      throw new Error("Api Error");
    }
  };

  useEffect(() => {
    itemGetQuery(targetId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading };
};

export default useItemQuery;

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Text, MovieCard } from "components";
import { Context } from "helpers";

const RenderList = () => {
  const list = useLocation().pathname.includes("watch-later") ? "wl" : "fav";
  const context = useContext(Context);
  const [dataList, setDatalist] = useState(context.load(list));

  useEffect(() => {
    setDatalist(context.load(list));
  }, [list]);
  return !!dataList?.length ? (
    dataList.map((item) => <MovieCard key={item.id} data={item} />)
  ) : (
    <Text>The list is empty!</Text>
  );
};

export default RenderList;

import React, { useContext } from "react";
import { Text, MovieCard } from "components";
import { Context } from "helpers";

const RenderList = ({ listType }) => {
  const context = useContext(Context);
  const dataList = context.load(listType === "watch-later" ? "wl" : "fav");

  return !!dataList?.length ? (
    dataList.map((item) => <MovieCard key={item.id} data={item} />)
  ) : (
    <Text>The list is empty!</Text>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.listType === nextProps.listType;
}
export default React.memo(RenderList, areEqual);

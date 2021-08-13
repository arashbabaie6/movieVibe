import React, { useMemo, useState } from "react";
import { Flex, Text, Image } from "components";
import star from "public/images/star-icon.svg";
import more from "public/images/more-icon.svg";
import watchlatericon from "public/images/watch-later-icon.svg";

function addFavoriteToLocalStorage(id) {
  const favorites = JSON.parse(localStorage.getItem("fav"));
  if (!favorites?.length) {
    localStorage.setItem("fav", JSON.stringify([id]));
  } else {
    const exist = favorites.findIndex((itemId) => itemId === id);
    if (exist !== -1) {
      favorites.splice(exist, 1);
      localStorage.setItem("fav", JSON.stringify(favorites));
    } else {
      favorites.push(id);
      localStorage.setItem("fav", JSON.stringify(favorites));
    }
  }
}

function addWatchLaterToLocalStorage(data) {
  const watchLaterList = JSON.parse(localStorage.getItem("wl"));
  if (!watchLaterList?.length) {
    localStorage.setItem(
      "wl",
      JSON.stringify([
        {
          id: data.id,
          vote_average: data.vote_average,
          poster_path: data.poster_path,
        },
      ])
    );
  } else {
    const exist = watchLaterList.findIndex((item) => item.id === data.id);
    if (exist !== -1) {
      watchLaterList.splice(exist, 1);
      localStorage.setItem("wl", JSON.stringify(watchLaterList));
    } else {
      watchLaterList.push({
        id: data.id,
        vote_average: data.vote_average,
        poster_path: data.poster_path,
      });
      localStorage.setItem("wl", JSON.stringify(watchLaterList));
    }
  }
  console.log(watchLaterList)
}

const MovieCard = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const initFavorite = useMemo(() => {
    const favoritesList = JSON.parse(localStorage.getItem("fav"));
    return favoritesList?.find((itemId) => itemId === data.id) ? true : false;
  }, []);
  const [favorite, setFavorite] = useState(initFavorite);
  const toggleFavorite = (id) => {
    setFavorite(!favorite);
    addFavoriteToLocalStorage(id);
  };

  const initWatchLater = useMemo(() => {
    const watchLaterList = JSON.parse(localStorage.getItem("wl"));
    return watchLaterList?.find((item) => item.id === data.id) ? true : false;
  }, []);
  const [watchLater, setWatchLater] = useState(initWatchLater);
  const toggleWatchLater = (data) => {
    setWatchLater(!watchLater);
    addWatchLaterToLocalStorage(data);
  };

  return (
    <Flex position="relative">
      {favorite && (
        <Flex
          width="24px"
          height="24px"
          position="absolute"
          style={{ top: 0, left: 0, zIndex: 10 }}
        >
          <img width="24px" height="24px" src={star} />
        </Flex>
      )}
       {watchLater && (
        <Flex
          width="24px"
          height="24px"
          position="absolute"
          style={{ top: 24, left: 2, zIndex: 10 }}
        >
          <img width="17px" height="17px" src={watchlatericon} />
        </Flex>
      )}
      <Flex
        width="24px"
        height="24px"
        position="absolute"
        style={{ top: 0, right: 0, zIndex: 10 }}
      >
        <img
          width="24px"
          height="24px"
          src={more}
          onClick={() => setShowMore(!showMore)}
          style={{ cursor: "pointer" }}
        />
      </Flex>
      {showMore && (
        <Flex
          width="80%"
          position="absolute"
          flexDirection="column"
          flexGap="4px 0"
          background="forceWhite"
          borderRadius="8px"
          style={{ top: 24, right: 4, zIndex: 10 }}
        >
          <Text
            color="forceBlack"
            style={{ cursor: "pointer" }}
            onClick={() => toggleFavorite(data.id)}
          >
            {favorite ? "Rmove favorite" : "Add favorite"}
          </Text>
          <Text
            color="forceBlack"
            style={{ cursor: "pointer" }}
            onClick={() => toggleWatchLater(data)}
          >
            {watchLater ? "Remove watch later" : "Add watch later"}
          </Text>
        </Flex>
      )}
      <Flex
        width="38px"
        height="38px"
        background="accent"
        position="absolute"
        borderRadius="19px"
        style={{ bottom: -19, left: 10 }}
      >
        <Text
          color={
            data.vote_average > 7.5
              ? "green"
              : data.vote_average > 6.0
              ? "yellow"
              : "red"
          }
          weight="bold"
        >
          {data.vote_average}
        </Text>
      </Flex>
      <Image width="150px" height="225px" src={data.poster_path} />
    </Flex>
  );
};

export default MovieCard;

import React, { useMemo, useState } from "react";
import { Flex, Text, Image } from "components";
import { LS } from "helpers";
// Assets
import star from "public/images/star-icon.svg";
import more from "public/images/more-icon.svg";
import watchlatericon from "public/images/watch-later-icon.svg";

const MovieCard = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const initFavorite = useMemo(() => {
    const favoritesList = LS.readFromStorage("fav");
    return favoritesList?.find((item) => item.id === data.id) ? true : false;
  }, []);
  const [favorite, setFavorite] = useState(initFavorite);
  const toggleFavorite = (data) => {
    setFavorite(!favorite);
    LS.addToStorage(data, "fav");
  };

  const initWatchLater = useMemo(() => {
    const watchLaterList = LS.readFromStorage("wl");
    return watchLaterList?.find((item) => item.id === data.id) ? true : false;
  }, []);
  const [watchLater, setWatchLater] = useState(initWatchLater);
  const toggleWatchLater = (data) => {
    setWatchLater(!watchLater);
    LS.addToStorage(data, "wl");
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
            onClick={() => toggleFavorite(data)}
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

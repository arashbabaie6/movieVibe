import React, { useMemo, useState } from "react";
import { Flex, Text, Image } from "components";
import { useHistory } from "react-router";
import { LS } from "helpers";
// Assets
import star from "public/images/star-icon.svg";
import starWhite from "public/images/star-white-icon.svg";
import watchlatericon from "public/images/watch-later-icon.svg";
import watchlaterGreenicon from "public/images/watch-later-green-icon.svg";

const MovieCard = ({
  data,
  imageWidth = "150px",
  imageHeight = "225px",
  imageSize = "w440_and_h660_face",
}) => {
  const history = useHistory();

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
    <Flex position="relative" style={{ cursor: "pointer" }}>
      <Flex
        width="24px"
        height="24px"
        position="absolute"
        style={{ top: 0, left: 0, zIndex: 10 }}
        onClick={() => toggleFavorite(data)}
      >
        <img width="24px" height="24px" src={favorite ? star : starWhite} />
      </Flex>
      <Flex
        width="24px"
        height="24px"
        position="absolute"
        style={{ top: 24, left: 2, zIndex: 10 }}
        onClick={() => toggleWatchLater(data)}
      >
        <img
          width="17px"
          height="17px"
          src={watchLater ? watchlaterGreenicon : watchlatericon}
        />
      </Flex>
      <Flex
        width="38px"
        height="38px"
        background="accent"
        position="absolute"
        borderRadius="19px"
        style={{ bottom: -19, left: 10, zIndex: 1 }}
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
      <Image
        width={imageWidth}
        height={imageHeight}
        imageSize={imageSize}
        src={data.poster_path}
        onClick={() => history.push(`/movie/${data.id}`)}
      />
    </Flex>
  );
};

export default MovieCard;

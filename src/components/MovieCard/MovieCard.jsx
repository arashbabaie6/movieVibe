import React, { useContext, useMemo, useState } from "react";
import { Flex, Text, Image } from "components";
import { useHistory } from "react-router";
import {  Context } from "helpers";
import PropTypes from "prop-types";
// Assets
import star from "public/images/star-icon.svg";
import starWhite from "public/images/star-white-icon.svg";
import watchlatericon from "public/images/watch-later-icon.svg";
import watchlaterGreenicon from "public/images/watch-later-green-icon.svg";

const MovieCard = ({
  data: movieData,
  imageWidth = "150px",
  imageHeight = "225px",
  imageSize = "w440_and_h660_face",
}) => {
  const context = useContext(Context);
  const history = useHistory();

  const initFavorite = useMemo(() => {
    const favoritesList = context.load("fav");
    return favoritesList?.find((item) => item.id === movieData.id)
      ? true
      : false;
  }, []);
  const [favorite, setFavorite] = useState(initFavorite);
  const handleClickFavorite = (movieData) => {
    setFavorite(!favorite);
    context.toggle(movieData, "fav");
  };

  const initWatchLater = useMemo(() => {
    const watchLaterList = context.load("wl");
    return watchLaterList?.find((item) => item.id === movieData.id)
      ? true
      : false;
  }, []);
  const [watchLater, setWatchLater] = useState(initWatchLater);
  const handleClickWatchLater = (movieData) => {
    setWatchLater(!watchLater);
    context.toggle(movieData, "wl");
  };

  const handleClickImage = () => {
    history.push(`/movie/${movieData.id}`);
  };
  return (
    <Flex position="relative" style={{ cursor: "pointer" }}>
      <Flex
        width="24px"
        height="24px"
        position="absolute"
        style={{ top: 0, left: 0, zIndex: 10 }}
        onClick={() => handleClickFavorite(movieData)}
      >
        <img width="24px" height="24px" src={favorite ? star : starWhite} />
      </Flex>
      <Flex
        width="24px"
        height="24px"
        position="absolute"
        style={{ top: 24, left: 2, zIndex: 10 }}
        onClick={() => handleClickWatchLater(movieData)}
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
            movieData.vote_average > 7.5
              ? "green"
              : movieData.vote_average > 6.0
              ? "yellow"
              : "red"
          }
          weight="bold"
        >
          {movieData.vote_average}
        </Text>
      </Flex>
      <Image
        width={imageWidth}
        height={imageHeight}
        imageSize={imageSize}
        src={movieData.poster_path}
        onClick={handleClickImage}
      />
    </Flex>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageSize: PropTypes.string,
};

export default MovieCard;

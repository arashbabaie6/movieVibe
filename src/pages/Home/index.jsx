import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import { Text, Flex } from "components";
import { MediaDiscover } from "./home-page.style";
import axios from "axiosHelper";

function generateMediaDiscoverSrc(listOfMovies) {
  console.log({ listOfMovies });
  const randomNumber = Math.ceil(Math.random() * (listOfMovies.length - 1));
  return listOfMovies[randomNumber].poster_path;
}

const HomePage = (props) => {
  const [mediaDiscoverSrc, setMediaDiscover] = useState(null);

  useEffect(() => {
    axios()
      .get("trending/movie/day")
      .then((res) => {
        const src = generateMediaDiscoverSrc(res.data.results);
        setMediaDiscover(src);
      })
      .catch((err) => console.log({ err }));
  }, []);
  return (
    <MediaDiscover
      as={Flex}
      width="100%"
      maxWidth="1300px"
      flexDirection="column"
      background="lightBlue"
      padding="30px 40px"
      position="relative"
      height='360px'
      mediaDiscoverSrc={mediaDiscoverSrc}
      borderRadius='0 0 8px 8px'
    >
      <Text
        width="100%"
        fontSize="title1"
        lineHeight="title1"
        color="forceWhite"
      >
        Explore in millions of movies!
      </Text>
    </MediaDiscover>
  );
};

export default withTheme(HomePage);

import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import { Text, Flex, Carousel } from "components";
import { MediaDiscover } from "./home-page.style";
import axios from "axiosHelper";

function generateMediaDiscoverSrc(listOfMovies) {
  const randomNumber = Math.ceil(Math.random() * (listOfMovies.length - 1));
  return listOfMovies[randomNumber].poster_path;
}

const HomePage = () => {
  const [mediaDiscoverSrc, setMediaDiscover] = useState(null);
  const [fetchingPopular, setFetchingPopular] = useState(false);
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    setFetchingPopular(true);
    axios()
      .get("/movie/popular")
      .then((res) => {
        const src = generateMediaDiscoverSrc(res.data.results);
        setPopularData(res.data.results);
        setMediaDiscover(src);
      })
      .catch((err) => console.log({ err }))
      .finally(() => setFetchingPopular(false));
  }, []);
  return (
    <Flex width="100%" maxWidth="1300px" flexDirection="column">
      <MediaDiscover
        as={Flex}
        width="100%"
        flexDirection="column"
        background="lightBlue"
        padding="30px 40px"
        position="relative"
        height="360px"
        mediaDiscoverSrc={mediaDiscoverSrc}
        borderRadius="0 0 8px 8px"
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

      <Flex width="100%" padding="0 40px">
        <Carousel
          title="Popular movies"
          data={popularData}
          fetching={fetchingPopular}
        />
      </Flex>
    </Flex>
  );
};

export default withTheme(HomePage);

import React from "react";
import { Flex, Text, Image } from "components";

const MovieCard = ({data}) => {
  return (
    <Flex position="relative">
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
  )
};

export default MovieCard;

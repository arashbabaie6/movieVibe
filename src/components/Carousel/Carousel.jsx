import React from "react";
import { Flex, Text } from "components";
import ImageFallback from "./ImageFallback";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";

const Carousel = ({ data, title, fetching = false }) => {
  return (
    <Flex width="100%" flexDirection="column" paddingTop="30px">
      <Text width="100%" fontSize="title4" lineHeight="title4" weight="bold">
        {title}
      </Text>
      <Flex
        width="100%"
        padding="20px 0 40px 0"
        justifyContent="flex-start"
        style={{ overflowX: "auto" }}
      >
        {!fetching ? (
          <Flex flexGap="0 20px">
            {!!data?.length &&
              data.map((item) => <MovieCard key={item.id} data={item} />)}
          </Flex>
        ) : (
          <Flex flexGap="0 20px">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ImageFallback key={item} />
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  fetching: PropTypes.bool,
};

export default Carousel;

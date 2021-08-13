import React from "react";
import { Flex, Text, Image } from "components";
import ImageFallback from "./ImageFallback";

const Carousel = ({ data, title, fetching }) => {
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
              data.map((item) => (
                <Flex key={item.id} position="relative">
                  <Flex
                    width="38px"
                    height="38px"
                    background="accent"
                    position="absolute"
                    borderRadius="19px"
                    style={{ bottom: -19, left: 10 }}
                  >
                      <Text color={item.vote_average > 7.5 ? 'green' : (item.vote_average > 6.0 ? 'yellow' : 'red')} weight='bold'>{item.vote_average}</Text>
                  </Flex>
                  <Image width="150px" height="225px" src={item.poster_path} />
                </Flex>
              ))}
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

export default Carousel;

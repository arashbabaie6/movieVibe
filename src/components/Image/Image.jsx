import React from "react";
import { Flex } from "components";

const Image = ({ width = "100%", height = "100%", src }) => {
  return (
    <Flex width={width} height={height}>
      <img src={src} />
    </Flex>
  );
};

export default Image;

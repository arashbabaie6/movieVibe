import React, { useState } from "react";
import { Flex } from "components";
import styled, { keyframes } from "styled-components";

const animateBg = keyframes`
0% { background-position: 0% 0%; }
100% { background-position: 0% 100%; 
`;

const Wrapper = styled.div`
  animation: ${animateBg} 1s linear infinite;
  background-image: linear-gradient(0deg, #6c6c6c, #ededed);
  background-size: 100% 1100%;
`;

const ImageFallback = () => {
  return (
    <Wrapper
      as={Flex}
      width="100%"
      height="100%"
      borderRadius="8px"
      position="absolute"
      style={{ top: 0, left: 0 }}
    />
  );
};

const Image = (props) => {
  const [loading, setLoading] = useState(true);

  const {
    width = "100%",
    height = "100%",
    src,
    imageSize = "w440_and_h660_face",
    borderRadius = "8px",
    ...restProps
  } = props;
  return (
    <Flex
      width={width}
      height={height}
      imageSize={imageSize}
      borderRadius={borderRadius}
      position="relative"
      {...restProps}
    >
      {loading && <ImageFallback />}
      <img
        width="100%"
        height="100%"
        onLoad={() => setLoading(false)}
        style={{ borderRadius: borderRadius }}
        src={`https://www.themoviedb.org/t/p/${imageSize}${src}`}
      />
    </Flex>
  );
};

export default Image;

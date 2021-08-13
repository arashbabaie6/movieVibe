import React from "react";
import { Flex } from "components";
import styled, { keyframes } from "styled-components";

const animateBg = keyframes`
0% { background-position: 0% 0%; }
100% { background-position: 0% 100%; 
`;

const Wrapper = styled.div`
  animation: ${animateBg} 2s linear infinite;
  background-image: linear-gradient(0deg, #6c6c6c, #ededed);
  background-size: 100% 1100%;
`;

const ImageFallback = () => {
  return <Wrapper as={Flex} width="150px" height="225px" borderRadius="8px" />;
};

export default ImageFallback;

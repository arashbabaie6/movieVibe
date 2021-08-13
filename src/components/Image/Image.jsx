import React from "react";
import { Flex } from "components";
import styled from "styled-components";

const Wrapper = styled.div`
  background-size: 100% 100%;
  background: #ebebeb
    ${(props) =>
      props.src
        ? `url("https://www.themoviedb.org/t/p/w440_and_h660_face${props.src}")`
        : ""};
  background-size: cover;
  background-position: center;
`;

const Image = ({ width = "100%", height = "100%", src }) => {
  return (
    <Wrapper
      as={Flex}
      width={width}
      height={height}
      borderRadius="8px"
      src={src}
    />
  );
};

export default Image;

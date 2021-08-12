import styled from 'styled-components';

import {
  margin,
  padding,
  width,
  height,
  color,
  flex,
  display,
  background,
  border,
  cursor,
  align,
  overflow,
  flexGrow,
} from './baseProps';

const Box = styled.div`
  direction: ${(props) => (props.direction ? props.direction : 'rtl')};
  position: ${(props) => (props.position ? props.position : '')};
  box-sizing: border-box;
  ${background};
  ${display};
  ${margin};
  ${padding};
  ${width};
  ${height};
  ${border};
  ${cursor};
  ${align};
  ${overflow};
  ${flexGrow};
  ${(props) => (props.color ? color(props.color) : color('white'))};
`;

const Flex = styled(Box)`
  display: ${(props) =>
    props.display ||
    props.displayD ||
    props.displayL ||
    props.displayT ||
    props.displayM
      ? display
      : 'flex'};
  ${flex};
`;

export { Box, Flex };

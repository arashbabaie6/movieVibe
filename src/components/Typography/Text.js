import styled from 'styled-components';
import {
  margin,
  padding,
  width,
  height,
  fontSize,
  lineHeight,
  color,
  weight,
  display,
  align,
} from './baseProps';

export const Text = styled.span`
  position: ${(props) => (props.position ? props.position : '')};
  font-family: 'SourceSansPro-Regular';
  direction: ${(props) => (props.direction ? props.direction : 'rtl')};
  display: ${(props) =>
    props.display ||
    props.displayD ||
    props.displayL ||
    props.displayT ||
    props.displayM
      ? display
      : 'inline-block'};

  ${margin};
  ${padding};
  ${width};
  ${height};
  ${weight};
  ${lineHeight};
  ${fontSize};
  ${align};
  ${(props) => (props.color ? color(props.color) : color('white'))};
`;

export default Text;

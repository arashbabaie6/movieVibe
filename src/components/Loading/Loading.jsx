import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  margin: 36px 0;
  border: ${(props) => props.size / 4}px solid
    ${(props) => props.theme.colors.gray1};
  border-top: ${(props) => props.size / 4}px solid
    ${(props) => props.theme.colors.accent};
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${spin} 2s linear infinite;
`;

const Loading = ({ size = 64 }) => {
  return <LoadingWrapper size={size} />;
};

export default Loading;

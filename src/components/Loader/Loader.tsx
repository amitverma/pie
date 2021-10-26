import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div<{ $size: number }>`
  &:after {
    border-radius: 50%;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
  }

  border-radius: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;

  border-top: ${({ $size }) => $size / 10}px solid rgba(0, 0, 0, 0.2);
  border-right: ${({ $size }) => $size / 10}px solid rgba(0, 0, 0, 0.2);
  border-bottom: ${({ $size }) => $size / 10}px solid rgba(0, 0, 0, 0.2);
  border-left: ${({ $size }) => $size / 10}px solid #000;

  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return <LoaderWrapper $size={size} />;
};

export default Loader;

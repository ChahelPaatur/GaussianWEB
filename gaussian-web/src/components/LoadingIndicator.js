import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease forwards;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(62, 110, 164, 0.3);
  border-top: 4px solid var(--primary-blue);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  position: absolute;
  margin-top: 80px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
`;

const LoadingIndicator = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingIndicator; 
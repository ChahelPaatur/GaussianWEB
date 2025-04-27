import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1B2C4B; // Updated background color
  z-index: 9999;
`;

const LoadingTextContainer = styled.div`
  font-family: 'Arial', sans-serif; // Choose a suitable font
  font-size: 5rem; // Adjust size as needed
  font-weight: bold;
  color: white;
  display: flex;
  align-items: baseline;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FixedPart = styled.span`
  /* Styles for fixed parts */
`;

// Renamed for clarity as it animates letters/sequences
const AnimatedLetter = styled(motion.span)`
  color: var(--light-blue); // Lighter blue for animated parts
  display: inline-block;
  overflow: hidden; // Hide letters initially if animating width
  white-space: nowrap;
`;

const LoadingScreen = ({ onLoaded }) => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 2000); // Wait 2 seconds for animation to start

    // Trigger onLoaded 2 seconds AFTER the animation finishes
    // Animation starts at 2000ms, duration is 500ms. So it finishes at 2500ms.
    // Add 2000ms extra wait time.
    const finishTimer = setTimeout(() => {
      if (onLoaded) {
        onLoaded();
      }
    }, 4500); // 2000ms (initial) + 500ms (anim) + 2000ms (extra) = 4500ms

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    }; // Cleanup timers on unmount
  }, [onLoaded]);

  return (
    <LoadingOverlay
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Optional fade out when leaving
      transition={{ duration: 0.3 }}
    >
      <LoadingTextContainer>
        <FixedPart>Ga</FixedPart>
        {showFullText && (
          <AnimatedLetter
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }} // Animate 'u'
          >
            u
          </AnimatedLetter>
        )}
        <FixedPart>s</FixedPart>
        {showFullText && (
          <AnimatedLetter
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }} // Animate 'sian' slightly after 'u'
          >
            sian
          </AnimatedLetter>
        )}
      </LoadingTextContainer>
    </LoadingOverlay>
  );
};

export default LoadingScreen; 
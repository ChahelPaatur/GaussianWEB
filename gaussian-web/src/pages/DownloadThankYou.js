import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYouContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #050816;
  background-image: 
    radial-gradient(white 3px, rgba(255,255,255,0.1) 5px, transparent 30px),
    radial-gradient(white 2px, rgba(255,255,255,0.08) 4px, transparent 25px),
    radial-gradient(white 3px, rgba(255,255,255,0.05) 5px, transparent 30px),
    radial-gradient(rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.05) 4px, transparent 25px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Message = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

const DownloadLink = styled.a`
    color: var(--light-blue);
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
    &:hover { color: var(--text-color); }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 80%;
    max-width: 300px;
  }
`;

// Re-using button styles (adjust slightly if needed)
const StyledButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 180px;

  &.primary {
    background: var(--primary-blue);
    color: white;
    border: 1px solid var(--primary-blue);
    &:hover { background: var(--secondary-blue); transform: translateY(-2px); }
  }

  &.secondary {
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
     &:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-2px); }
  }
  
  i { margin-right: 0.3rem; }
`;

const DownloadThankYou = () => {
  const location = useLocation();
  const downloadUrl = location.state?.downloadUrl;

  useEffect(() => {
    if (downloadUrl) {
      console.log("Attempting to initiate download for:", downloadUrl);
      try {
        const link = document.createElement('a');
        link.href = downloadUrl;
        const filename = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1);
        link.setAttribute('download', filename || 'download');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Download link clicked programmatically.");
      } catch (error) {
        console.error("Failed to initiate download programmatically:", error);
      }
    }
  }, [downloadUrl]);

  return (
    <ThankYouContainer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
      <Title
         initial={{ y: -30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.2 }}
      >
        Thank you for downloading Gaussian!
      </Title>
      <Message
         initial={{ y: 30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.4 }}
      >
        Your download should start automatically. 
        {downloadUrl ? (
            <> If it doesn't, you can <DownloadLink href={downloadUrl} download>click here to download it manually</DownloadLink>.</>
        ) : (
            " An error occurred (no download link found). Please go back and try again."
        )}
      </Message>
      <ButtonGroup
         initial={{ y: 30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.6 }}
      >
        <StyledButtonLink to="/" className="secondary">
           Return to Website
        </StyledButtonLink>
        <StyledButtonLink to="/docs" className="primary">
          <i className="fas fa-book-open"></i> Go to Docs
        </StyledButtonLink>
      </ButtonGroup>
    </ThankYouContainer>
  );
};

export default DownloadThankYou; 
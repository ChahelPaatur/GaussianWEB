import React from 'react';
import styled from 'styled-components';
import m3Jpg from '../assets/images/m3.jpg'; // Import m3.jpg
import m2Png from '../assets/images/m2.png'; // Corrected filename to m2.png
import paypalQrPlaceholder from '../assets/images/qrcode.png'; // Placeholder QR code path

// Layout inspired by United Way example, form elements by Stripe/Mozilla

const PageContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1300px; // Increased max-width from 1100px
  margin: 3rem auto 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr; // Two equal columns
  gap: 4rem; // Gap between columns

  @media (max-width: 992px) {
    grid-template-columns: 1fr; // Stack columns on smaller screens
    gap: 3rem;
    max-width: 700px; // Adjust max-width for single column layout too
  }
  
  @media (max-width: 600px) {
      padding: 3rem 1rem; // Adjust padding for very small screens
  }
`;

const LeftColumn = styled.div`
  // Styles for the descriptive content on the left
  @media (max-width: 992px) {
    order: 2; // Show description below form on smaller screens
    text-align: center;
  }
`;

const RightColumn = styled.div`
  background: rgba(15, 23, 42, 0.9); 
  border-radius: 16px;
  border: 1px solid var(--border-color);
  padding: 3.5rem 3rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  display: flex; // Use flexbox for vertical centering of content
  flex-direction: column;
  align-items: center; // Center content horizontally
  text-align: center; // Center text

  @media (max-width: 992px) {
    order: 1;
    padding: 2.5rem 2rem;
  }
`;

const ContentHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--text-color);
`;

const ContentParagraph = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

// Renamed and changed to Flexbox for two images
const ImageContainer = styled.div`
  display: flex;
  gap: 1.5rem; // Space between images
  justify-content: center; // Center images horizontally
  align-items: center; // Align items vertically
  max-width: 600px; // Adjust max width for the container
  margin: 0 auto 2rem auto;
  padding: 0 1rem; // Add some padding on smaller screens if needed
`;

// Renamed from CollageImage
const StyledImage = styled.img`
  flex: 1; // Allow images to take up space
  max-width: 50%; // Limit image width to half of container minus gap
  height: auto;
  object-fit: cover; 
  border-radius: 12px; // Slightly rounded corners
  border: 3px solid var(--border-color); // Adjusted border
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04) rotate(1deg); // Slight rotate on hover
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    z-index: 2; 
    position: relative;
    border-color: var(--primary-blue);
  }
`;

// New component for the QR Code image
const QrCodeImage = styled.img`
  display: block;
  width: 200px; // Adjust size as needed
  height: 200px;
  margin: 1.5rem auto;
  border-radius: 8px;
  border: 1px solid var(--border-color);
`;

// New component for donation instruction sections
const DonationMethod = styled.div`
  margin-bottom: 3.5rem;
  width: 100%;

  h3 {
    font-size: 1.4rem;
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
  }

  code {
    background: rgba(0,0,0,0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'SF Mono', monospace;
    font-size: 0.95rem;
    color: var(--light-blue);
  }
`;

const Donations = () => {
  return (
    <PageContainer>
      <LeftColumn>
          <ContentHeading>Support Gaussian Development</ContentHeading>
          <ImageContainer>
            <StyledImage src={m3Jpg} alt="Creator Portrait 1" loading="lazy" />
            <StyledImage src={m2Png} alt="Creator Portrait 2" loading="lazy" />
          </ImageContainer>
          <ContentParagraph>
            Gaussian is a passion project developed by Chahel Paatur, aimed at creating a fun and accessible scripting language for game development experiments. Your contribution directly supports development efforts, server costs, and helps keep the project moving forward.
          </ContentParagraph>
          <ContentParagraph>
            Whether it's a one-time donation or monthly support, every bit helps foster innovation and allows more time to be dedicated to improving the language and its features. Thank you for considering supporting Gaussian!
          </ContentParagraph>
      </LeftColumn>

      <RightColumn>
        <DonationMethod>
          <h3>Donate via PayPal</h3>
          <p>Scan the QR code below using your PayPal app to send a donation directly.</p>
          {/* Placeholder for QR code - Replace src with your actual QR code image path */}
          <QrCodeImage src={paypalQrPlaceholder} alt="PayPal Donation QR Code" />
        </DonationMethod>

        <DonationMethod>
          <h3>Donate via Zelle</h3>
          <p>You can send a donation using Zelle directly to the phone number:</p>
          <p><code>925-475-9513</code></p>
        </DonationMethod>
      </RightColumn>
    </PageContainer>
  );
};

export default Donations; 
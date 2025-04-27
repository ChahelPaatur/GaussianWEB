import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Inspired by Mailchimp About page structure, enhanced aesthetics

const AboutContainer = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const HeaderSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    margin-bottom: 4rem;
  }
`;

const HeaderText = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

// New styled component for the logo image
const LogoImage = styled.img`
  height: 250px; // Adjust size as needed for the grid column
  width: auto;
  max-width: 100%;
  display: block; // Good practice for images in layout
  margin: auto; // Center if needed within its container
`;

// Container for the logo in the grid
const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    order: 1; // Logo appears above text on small screens
    margin-bottom: 2rem;
    height: auto; // Reset height for column layout
  }
`;

const MainHeading = styled(motion.h1)`
  font-size: 3.8rem;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-color);
`;

const IntroParagraph = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  max-width: 550px;

  @media (max-width: 768px) {
    margin: 1.5rem auto 0;
  }
`;

const ImagePlaceholder = styled(motion.div)`
  background: linear-gradient(145deg, var(--accent-blue), var(--secondary-blue));
  border-radius: 16px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  font-size: 1.1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 3rem;
    height: 300px;
  }
`;

const ContentSection = styled(motion.section)`
  max-width: 800px;
  margin: 0 auto;
`;

const SubHeading = styled(motion.h2)`
  font-size: 2.2rem;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
  border-top: 1px solid var(--border-color);
  padding-top: 3rem;
`;

const Paragraph = styled(motion.p)`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const About = () => {
  return (
    <AboutContainer 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeaderSection variants={itemVariants}>
        <HeaderText variants={itemVariants}>
          <MainHeading variants={itemVariants}>About Gaussian</MainHeading>
          <IntroParagraph variants={itemVariants}>
            Gaussian is an experimental scripting language designed for creative coding and rapid game prototyping.
          </IntroParagraph>
        </HeaderText>
        <LogoContainer variants={itemVariants}>
          <LogoImage src="/gaussian-logo.png" alt="Gaussian Logo" />
        </LogoContainer>
      </HeaderSection>

      <ContentSection variants={itemVariants}>
        <SubHeading variants={itemVariants}>Our Mission</SubHeading>
        <Paragraph variants={itemVariants}>
          Our mission is to provide a simple, intuitive, and fun programming environment that bridges the gap between high-level scripting and essential game development features. We aim to empower developers and hobbyists to quickly bring their ideas to life.
        </Paragraph>
        <Paragraph variants={itemVariants}>
          Gaussian focuses on readability, ease of integration with graphics and input (like Raylib), and exploring novel concepts like built-in state management and accessible AI integration.
        </Paragraph>

        <SubHeading variants={itemVariants}>The Technology</SubHeading>
        <Paragraph variants={itemVariants}>
          Built with performance and safety in mind using Rust, Gaussian features a custom tree-walk interpreter. Its syntax draws inspiration from modern languages like JavaScript, Python, and C#, aiming for a familiar yet streamlined feel.
        </Paragraph>
        <Paragraph variants={itemVariants}>
           Core functionality is extended through modules (e.g., `graphics`, `input`, `audio`) that wrap powerful libraries like Raylib, making complex tasks more accessible within the script.
        </Paragraph>

        <SubHeading variants={itemVariants}>The Creator</SubHeading>
        <Paragraph variants={itemVariants}>
          Gaussian is primarily developed by Chahel Paatur, a student at John C. Kimball High School in Tracy, CA. Driven by a passion for game development and simpler tooling, this project serves as both a learning experience and an attempt to create something useful for the creative coding community.
        </Paragraph>
        <Paragraph variants={itemVariants}> 
          Follow the development progress on <a href="https://github.com/ChahelPaatur" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </Paragraph>
      </ContentSection>
    </AboutContainer>
  );
};

export default About; 
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  position: relative; // Important for Vanta positioning
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 8rem 1rem 3rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative; // Needed to keep content above Vanta background
  z-index: 1;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Subtitle = styled(motion.h2)` // Changed from div to h2 for semantic correctness
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, var(--text-color), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 540px;
  
  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: var(--primary-blue);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block; // Ensure proper layout for Link
  text-align: center; // Ensure text center in column layout
  
  &:hover {
    background: var(--secondary-blue);
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: var(--text-color);
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  display: inline-block; // Ensure proper layout for Link
  text-align: center; // Ensure text center in column layout
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CodeExampleWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
    margin-bottom: 2rem; // Add margin when stacked
  }
`;

const CodeExample = styled(motion.pre)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 80px -10px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  backdrop-filter: blur(10px);
  max-width: 100%;
  overflow-x: auto; // Allow horizontal scroll for code
  
  code {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
    white-space: pre; // Preserve whitespace
  }
  
  .keyword {
    color: #ff79c6;
  }
  
  .string {
    color: #f1fa8c;
  }
  
  .comment {
    color: #6272a4;
  }
  
  .class-name {
    color: #8be9fd;
  }
  
  .function {
    color: #50fa7b;
  }
  
  .number {
    color: #bd93f9;
  }
`;

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null); 

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(CLOUDS({
        el: vantaRef.current,
        THREE: THREE, 
        mouseControls: true, 
        touchControls: true, 
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x192f46, 
        cloudColor: 0x436998, 
        cloudShadowColor: 0xe1e34, // Corrected hex value? (was 0xe1e34) -> 0x0e1e34 might be intended
        sunColor: 0x140d06, 
        sunGlareColor: 0x6e3320, 
        sunlightColor: 0x7a6148
      }));
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null); 
      }
    };
  }, [vantaEffect]); 

  // Simplified Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 } // Simple fade-in, removed stagger
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0 }, // Removed y: 20
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 } // Simple fade-in
    }
  };
  
  const codeVariants = {
    hidden: { opacity: 0 }, // Removed scale: 0.95
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 } // Simple fade-in, removed spring
    }
  };

  return (
    <HeroContainer ref={vantaRef} style={{ position: 'relative', minHeight: '100vh' }}>
      <HeroContent
        variants={containerVariants} // Apply simplified variants
        initial="hidden"
        animate="visible"
      >
        <HeroText>
          <Subtitle variants={itemVariants}>Gaussian Programming Language</Subtitle>
          <Title variants={itemVariants}>
            Create Unique Game Mechanics with AI
          </Title>
          <Description variants={itemVariants}>
            Gaussian is a scripting language designed for game development experiments, 
            featuring elegant syntax, state machines, and easy AI integration.
          </Description>
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton 
              as={Link} 
              to="/download"
              whileHover={{ scale: 1.03, y: -2 }} // Keep simple hover animations
              whileTap={{ scale: 0.97 }}
            >
              Download v1.0.3 beta
            </PrimaryButton>
            <SecondaryButton 
              as={Link} 
              to="/docs"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Documentation
            </SecondaryButton>
          </ButtonGroup>
        </HeroText>
        
        <CodeExampleWrapper variants={codeVariants}> {/* Apply simplified code variants */} 
          <CodeExample>
            <code>
              <span className="comment">// Define a Player class</span>{`\n`}
              <span className="keyword">class</span> <span className="class-name">Player</span> {'{'}{`\n`}
              {'  '}<span className="keyword">var</span> x = <span className="number">0</span>;{`\n`}
              {'  '}<span className="keyword">val</span> speed = <span className="number">5</span>;{`\n`}
              {`\n`}
              {'  '}{/* Initializer (constructor) */}{`\n`}
              {'  '}<span className="function">init</span>(startX) {'{'}{`\n`}
              {'    '}this.x = startX;{`\n`}
              {'    '}<span className="function">print</span> <span className="string">"Player created at x="</span> + this.x;{`\n`}
              {'  }'}{`\n`}
              {`\n`}
              {'  '}<span className="keyword">function</span> <span className="function">move</span>(dx) {'{'}{`\n`}
              {'    '}this.x = this.x + dx * this.speed;{`\n`}
              {'  }'}{`\n`}
              {'}'}{`\n`}
              {`\n`}
              <span className="keyword">var</span> p = <span className="function">Player</span>(<span className="number">50</span>);{`\n`}
              p.<span className="function">move</span>(<span className="number">10</span>);{`\n`}
              <span className="function">print</span> <span className="string">"Player position: "</span> + p.x;
            </code>
          </CodeExample>
        </CodeExampleWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

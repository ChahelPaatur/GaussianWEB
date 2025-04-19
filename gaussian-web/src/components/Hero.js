import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  position: relative;
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

const Subtitle = styled(motion.div)`
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

const PrimaryButton = styled(motion(Link))`
  background: var(--primary-blue);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--secondary-blue);
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const SecondaryButton = styled(motion(Link))`
  background: transparent;
  color: var(--text-color);
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const CodeExampleWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
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
  
  code {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
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

const FloatingGradient = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-blue) 0%, rgba(62, 110, 164, 0) 70%);
  opacity: 0.6;
  filter: blur(100px);
  z-index: -1;
`;

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const codeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const buttonVariants = {
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 }
  };

  return (
    <HeroContainer>
      <FloatingGradient
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, 100, -100],
          y: [-100, 100, -100]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
        style={{ top: '20%', left: '10%' }}
      />
      
      <FloatingGradient
        initial={{ x: 100, y: 100 }}
        animate={{ 
          x: [100, -100, 100],
          y: [100, -100, 100]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />
      
      <HeroContent>
        <HeroText
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Subtitle variants={itemVariants}>Introducing</Subtitle>
          <Title variants={itemVariants}>The Gaussian Programming Language</Title>
          <Description variants={itemVariants}>
            A powerful scripting language designed specifically for game development experiments.
            Write elegant, readable code with a syntax inspired by JavaScript, Python, and C#.
          </Description>
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton 
              to="/download"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </PrimaryButton>
            <SecondaryButton 
              to="/docs"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Docs
            </SecondaryButton>
          </ButtonGroup>
        </HeroText>
        
        <CodeExampleWrapper
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 50
          }}
        >
          <CodeExample
            variants={codeVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5, boxShadow: "0 25px 90px -15px rgba(0, 0, 0, 0.6)" }}
            transition={{ duration: 0.3 }}
          >
            <code>
              <span className="comment">// Define a Player class</span><br/>
              <span className="keyword">class</span> <span className="class-name">Player</span> {'{'}<br/>
              {'  '}<span className="keyword">var</span> x = <span className="number">0</span>;<br/>
              {'  '}<span className="keyword">val</span> speed = <span className="number">5</span>;<br/>
              <br/>
              {'  '}{/* Initializer (constructor) */}<br/>
              {'  '}<span className="function">init</span>(startX) {'{'}<br/>
              {'    '}this.x = startX;<br/>
              {'    '}<span className="function">print</span> <span className="string">"Player created at x="</span> + this.x;<br/>
              {'  }'}<br/>
              <br/>
              {'  '}<span className="keyword">function</span> <span className="function">move</span>(dx) {'{'}<br/>
              {'    '}this.x = this.x + dx * this.speed;<br/>
              {'  }'}<br/>
              {'}'}<br/>
              <br/>
              <span className="keyword">var</span> p = <span className="function">Player</span>(<span className="number">50</span>);<br/>
              p.<span className="function">move</span>(<span className="number">10</span>);<br/>
              <span className="function">print</span> <span className="string">"Player position: "</span> + p.x;
            </code>
          </CodeExample>
        </CodeExampleWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 
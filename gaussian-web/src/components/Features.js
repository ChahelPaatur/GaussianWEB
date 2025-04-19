import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--text-color), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-blue);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: var(--primary-blue);
  
  i {
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Features = () => {
  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <i className="devicon-javascript-plain colored"></i>,
      title: "Game Development Focused",
      description: "Designed specifically for game development experiments with intuitive syntax and built-in features for handling game objects, states, and interactions."
    },
    {
      icon: <i className="devicon-react-plain colored"></i>,
      title: "State Management",
      description: "Powerful state machine functionality built right into the language, making it easy to manage game object behaviors and transitions."
    },
    {
      icon: <i className="devicon-unity-original colored"></i>,
      title: "Native Module Integration",
      description: "Import graphics, input, and audio modules that wrap around industry-standard libraries like Raylib for seamless game development."
    },
    {
      icon: <i className="devicon-python-plain colored"></i>,
      title: "Familiar Syntax",
      description: "A syntax inspired by JavaScript, Python, and C# that feels familiar and easy to learn for developers coming from various backgrounds."
    },
    {
      icon: <i className="devicon-googlecloud-plain colored"></i>,
      title: "AI Integration",
      description: "Experimental AI integration with Google Gemini Pro for creating dynamic NPC behaviors and other text-based generative content."
    },
    {
      icon: <i className="devicon-vscode-plain colored"></i>,
      title: "Easy to Set Up",
      description: "Simple installation with bundled interpreter executable and comprehensive VS Code extension for a smooth development experience."
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Key Features</SectionTitle>
          <SectionSubtitle>
            Discover what makes Gaussian a unique and powerful language for game development.
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, i) => (
            <FeatureCard 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={featureVariants}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 
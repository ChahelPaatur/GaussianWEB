import React from 'react';
import styled from 'styled-components';
import DocumentationLayout from '../components/DocumentationLayout';

const DocHeader = styled.div`
  margin-bottom: 2rem;
`;

const DocTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--text-color), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DocDescription = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin-bottom: 2rem;
`;

const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const DocCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-blue);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const CardLink = styled.a`
  color: var(--primary-blue);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: "→";
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const Documentation = () => {
  return (
    <DocumentationLayout>
      <DocHeader>
        <DocTitle>Gaussian Language Documentation</DocTitle>
        <DocDescription>
          Welcome to the Gaussian Language documentation. This guide will help you get started with Gaussian,
          understand its syntax and features, and build your first game development experiments.
        </DocDescription>
      </DocHeader>
      
      <DocsGrid>
        <DocCard>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Learn how to install Gaussian, set up your development environment, and write your first program.
          </CardDescription>
          <CardLink href="/docs/getting-started">Get Started</CardLink>
        </DocCard>
        
        <DocCard>
          <CardTitle>Language Reference</CardTitle>
          <CardDescription>
            Explore the syntax, types, and constructs that make up the Gaussian programming language.
          </CardDescription>
          <CardLink href="/docs/language-reference/syntax">View Reference</CardLink>
        </DocCard>
        
        <DocCard>
          <CardTitle>Built-in Functionality</CardTitle>
          <CardDescription>
            Discover Gaussian's built-in functions, modules for graphics, input, audio, and more.
          </CardDescription>
          <CardLink href="/docs/built-in/functions">Explore Functions</CardLink>
        </DocCard>
        
        <DocCard>
          <CardTitle>Game Development</CardTitle>
          <CardDescription>
            Learn how to use Gaussian's game-specific features like states, graphics integration, and input handling.
          </CardDescription>
          <CardLink href="/docs/examples/game">View Examples</CardLink>
        </DocCard>
        
        <DocCard>
          <CardTitle>AI Integration</CardTitle>
          <CardDescription>
            Explore the experimental AI integration with Google Gemini Pro for creating dynamic NPCs.
          </CardDescription>
          <CardLink href="/docs/built-in/ai">Learn More</CardLink>
        </DocCard>
        
        <DocCard>
          <CardTitle>Contribute</CardTitle>
          <CardDescription>
            Learn how to contribute to Gaussian's development, report bugs, and suggest features.
          </CardDescription>
          <CardLink href="/community">Get Involved</CardLink>
        </DocCard>
      </DocsGrid>
    </DocumentationLayout>
  );
};

export default Documentation; 
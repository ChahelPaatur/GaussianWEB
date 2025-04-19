import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(15, 23, 42, 0.9);
  padding: 4rem 2rem 2rem;
  border-top: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div``;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 1rem;
  
  img {
    height: 2rem;
  }
`;

const FooterDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const ColumnTitle = styled.h4`
  color: var(--text-color);
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    font-size: 0.95rem;
    
    &:hover {
      color: var(--primary-blue);
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-blue);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <FooterLogo to="/">
            <img src="/gaussian-logo.png" alt="Gaussian Logo" />
            Gaussian
          </FooterLogo>
          <FooterDescription>
            A programming language designed for game development experiments, with an elegant syntax and powerful features.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://github.com/gaussian-language" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://twitter.com/gaussian_lang" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://discord.gg/gaussian" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </SocialLink>
          </SocialLinks>
        </Column>
        
        <Column>
          <ColumnTitle>Resources</ColumnTitle>
          <FooterLinks>
            <FooterLink><Link to="/docs">Documentation</Link></FooterLink>
            <FooterLink><Link to="/docs/getting-started">Getting Started</Link></FooterLink>
            <FooterLink><Link to="/docs/language-reference">Language Reference</Link></FooterLink>
            <FooterLink><Link to="/docs/examples">Examples</Link></FooterLink>
          </FooterLinks>
        </Column>
        
        <Column>
          <ColumnTitle>Downloads</ColumnTitle>
          <FooterLinks>
            <FooterLink><Link to="/download">Gasrun Interpreter</Link></FooterLink>
            <FooterLink><Link to="/download#vscode">VS Code Extension</Link></FooterLink>
            <FooterLink><Link to="/download#source">Source Code</Link></FooterLink>
          </FooterLinks>
        </Column>
        
        <Column>
          <ColumnTitle>Community</ColumnTitle>
          <FooterLinks>
            <FooterLink><a href="https://github.com/gaussian-language/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></FooterLink>
            <FooterLink><a href="https://discord.gg/gaussian" target="_blank" rel="noopener noreferrer">Discord</a></FooterLink>
            <FooterLink><Link to="/about">About</Link></FooterLink>
            <FooterLink><Link to="/community">Contributing</Link></FooterLink>
          </FooterLinks>
        </Column>
      </FooterContent>
      
      <BottomBar>
        <Copyright>© {currentYear} Gaussian Language. All rights reserved.</Copyright>
        <BottomLinks>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 
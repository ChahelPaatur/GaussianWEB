import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  text-decoration: none;
  
  img {
    height: 2.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
  
  &:hover {
    color: var(--text-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary-blue);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-dark);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo to="/">
          <img src="/gaussian-logo.png" alt="Gaussian Logo" />
          Gaussian
        </Logo>
        
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/docs">Documentation</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/docs" onClick={() => setMobileMenuOpen(false)}>Documentation</MobileNavLink>
          <MobileNavLink to="/download" onClick={() => setMobileMenuOpen(false)}>Download</MobileNavLink>
          <MobileNavLink to="/community" onClick={() => setMobileMenuOpen(false)}>Community</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar; 
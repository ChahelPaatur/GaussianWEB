import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { Link, useLocation, Outlet } from 'react-router-dom';

const DocContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 70px; /* Adjust based on Navbar height */
`;

const Sidebar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})`
  width: 220px;
  background: rgba(15, 23, 42, 0.8);
  border-right: 1px solid var(--border-color);
  padding: 2rem;
  position: fixed;
  height: calc(100vh - 70px); /* Adjust based on Navbar height */
  overflow-y: auto;
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: 5px 0 15px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const MenuToggle = styled.button`
  display: none;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: var(--primary-blue);
  color: white;
  font-size: 1.8rem;
  border: none;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--secondary-blue);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 220px;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 2rem 1rem;
  }
`;

const SidebarTitle = styled.h3`
  color: var(--text-color);
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
`;

const NavCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h4`
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})`
  color: ${({ active }) => active ? 'var(--primary-blue)' : 'var(--text-secondary)'};
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  padding: 0.4rem 0;
  border-radius: 4px;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--text-color);
  }
`;

const DocumentationLayout = memo(({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/docs' && location.pathname.startsWith(path + '/')); 
  };
  
  return (
    <DocContainer>
      <Sidebar isOpen={sidebarOpen}>
        <SidebarTitle>Documentation</SidebarTitle>
        
        {/* Comment out Getting Started for now */}
        {/* 
        <NavCategory>
          <CategoryTitle>Getting Started</CategoryTitle>
          <NavList>
            <NavItem>
              <NavLink to="/docs/getting-started" active={isActive('/docs/getting-started')}>
                Installation & Setup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/hello-world" active={isActive('/docs/hello-world')}>
                Hello World
              </NavLink>
            </NavItem>
          </NavList>
        </NavCategory>
        */}

        <NavCategory>
          <CategoryTitle>Language Reference</CategoryTitle>
          <NavList>
            <NavItem>
              <NavLink to="/docs/language-reference/syntax" active={isActive('/docs/language-reference/syntax')}>
                Syntax Overview
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/language-reference/variables" active={isActive('/docs/language-reference/variables')}>
                Variables & Types
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/language-reference/control-flow" active={isActive('/docs/language-reference/control-flow')}>
                Control Flow
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/language-reference/functions" active={isActive('/docs/language-reference/functions')}>
                Functions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/language-reference/classes" active={isActive('/docs/language-reference/classes')}>
                Classes & Objects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/language-reference/states" active={isActive('/docs/language-reference/states')}>
                States
              </NavLink>
            </NavItem>
          </NavList>
        </NavCategory>

        <NavCategory>
          <CategoryTitle>Built-in Functionality</CategoryTitle>
          <NavList>
            <NavItem>
              <NavLink to="/docs/built-in/functions" active={isActive('/docs/built-in/functions')}>
                Native Functions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/built-in/modules" active={isActive('/docs/built-in/modules')}>
                Modules
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/built-in/ai" active={isActive('/docs/built-in/ai')}>
                AI Integration
              </NavLink>
            </NavItem>
          </NavList>
        </NavCategory>
        
        {/* Comment out Examples for now */}
        {/* 
        <NavCategory>
          <CategoryTitle>Examples</CategoryTitle>
          <NavList>
            <NavItem>
              <NavLink to="/docs/examples/game" active={isActive('/docs/examples/game')}>
                Simple Game
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/examples/ai-npc" active={isActive('/docs/examples/ai-npc')}>
                AI-Driven NPC
              </NavLink>
            </NavItem>
          </NavList>
        </NavCategory>
        */}
        <NavCategory> 
          <CategoryTitle>Examples</CategoryTitle>
          <NavList>
            <NavItem>
              <NavLink to="/docs/examples/game-dev" active={isActive('/docs/examples/game-dev')}>
                Game Development
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs/examples/test-scripts" active={isActive('/docs/examples/test-scripts')}>
                Test Scripts
              </NavLink>
            </NavItem>
          </NavList>
        </NavCategory>
      </Sidebar>
      
      <MenuToggle onClick={toggleSidebar}>
        {sidebarOpen ? '✕' : '☰'}
      </MenuToggle>
      
      <Content>
        <Outlet />
      </Content>
    </DocContainer>
  );
});

export default DocumentationLayout;
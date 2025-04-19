import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DownloadContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px 1rem 3rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--text-color), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const DownloadSections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const Section = styled(motion.section)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  i {
    color: var(--primary-blue);
  }
`;

const SectionDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 800px;
`;

const DownloadCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DownloadCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    font-size: 1.5rem;
    color: var(--primary-blue);
  }
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background: var(--secondary-blue);
    transform: translateY(-2px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Instructions = styled.div`
  background: rgba(15, 23, 42, 0.4);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(5px);
`;

const InstructionsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--primary-blue);
  }
`;

const InstructionsList = styled.ol`
  padding-left: 1.5rem;
  color: var(--text-secondary);
  
  li {
    margin-bottom: 0.75rem;
  }
`;

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.9rem;
  
  code {
    color: var(--text-secondary);
  }
`;

const Download = () => {
  const interpreterDownloads = [
    {
      title: "Windows",
      icon: <i className="devicon-windows8-original colored"></i>,
      description: "For Windows 10/11",
      link: "/downloads/gasrun-win-x64.exe",
      version: "0.9.0 Beta"
    },
    {
      title: "macOS",
      icon: <i className="devicon-apple-original colored"></i>,
      description: "For macOS 11+",
      link: "/downloads/gasrun-mac-x64",
      version: "0.9.0 Beta"
    },
    {
      title: "Linux",
      icon: <i className="devicon-linux-plain colored"></i>,
      description: "For Ubuntu/Debian",
      link: "/downloads/gasrun-linux-x64",
      version: "0.9.0 Beta"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      y: -5,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
      borderColor: "var(--primary-blue)"
    }
  };
  
  const buttonVariants = {
    hover: { scale: 1.03, y: -2 },
    tap: { scale: 0.97 }
  };
  
  return (
    <DownloadContainer>
      <PageHeader>
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Download Gaussian
        </PageTitle>
        <PageDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get everything you need to start building with Gaussian, the programming language 
          designed for game development experiments.
        </PageDescription>
      </PageHeader>
      
      <DownloadSections
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section 
          variants={itemVariants}
          id="interpreter"
        >
          <SectionTitle>
            <i className="devicon-nodejs-plain colored"></i> 
            Gasrun Interpreter
          </SectionTitle>
          <SectionDescription>
            The Gaussian interpreter (gasrun) is required to run Gaussian scripts. Download the version 
            that matches your operating system.
          </SectionDescription>
          
          <DownloadCards>
            {interpreterDownloads.map((download, i) => (
              <DownloadCard 
                key={i}
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
              >
                <CardTitle>
                  {download.icon} {download.title}
                </CardTitle>
                <CardDescription>
                  {download.description}
                  <br />
                  <small>Version: {download.version}</small>
                </CardDescription>
                <DownloadButton 
                  href={download.link}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </DownloadButton>
              </DownloadCard>
            ))}
          </DownloadCards>
          
          <Instructions>
            <InstructionsTitle>
              <i className="fas fa-info-circle"></i> Installation Instructions
            </InstructionsTitle>
            <InstructionsList>
              <li>Download the appropriate gasrun executable for your operating system.</li>
              <li>
                <strong>Windows</strong>: Rename the downloaded file to <code>gasrun.exe</code> and move it to a directory in your PATH, 
                or use it directly with its full path.
              </li>
              <li>
                <strong>macOS/Linux</strong>: Rename the downloaded file to <code>gasrun</code>, make it executable, and optionally move 
                it to a directory in your PATH:
                <CodeBlock>
                  <code>
                    chmod +x gasrun<br />
                    mv gasrun /usr/local/bin/  # Optional
                  </code>
                </CodeBlock>
              </li>
              <li>
                Test your installation by running:
                <CodeBlock>
                  <code>
                    gasrun --version
                  </code>
                </CodeBlock>
              </li>
            </InstructionsList>
          </Instructions>
        </Section>
        
        <Section 
          variants={itemVariants}
          id="vscode"
        >
          <SectionTitle>
            <i className="devicon-vscode-plain colored"></i> VS Code Extension
          </SectionTitle>
          <SectionDescription>
            The Gaussian VS Code extension provides syntax highlighting, code completion, and other helpful 
            tools for developing with Gaussian.
          </SectionDescription>
          
          <DownloadCards>
            <DownloadCard
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <CardTitle>
                <i className="devicon-vscode-plain colored"></i> VS Code Extension
              </CardTitle>
              <CardDescription>
                Gaussian language support for Visual Studio Code.
                <br />
                <small>Version: 0.9.0 Beta</small>
              </CardDescription>
              <DownloadButton 
                href="/downloads/gaussian-vscode-0.9.0.vsix"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download VSIX
              </DownloadButton>
            </DownloadCard>
          </DownloadCards>
          
          <Instructions>
            <InstructionsTitle>
              <i className="fas fa-info-circle"></i> Installation Instructions
            </InstructionsTitle>
            <InstructionsList>
              <li>Download the Gaussian VS Code extension (.vsix file).</li>
              <li>
                Open VS Code and select <strong>Extensions</strong> from the sidebar.
              </li>
              <li>
                Click the <strong>...</strong> menu (top-right of Extensions panel) and select <strong>Install from VSIX...</strong>
              </li>
              <li>
                Navigate to the downloaded .vsix file and select it.
              </li>
              <li>
                Once installed, VS Code will automatically recognize .gas files as Gaussian language files.
              </li>
            </InstructionsList>
          </Instructions>
        </Section>
        
        <Section 
          variants={itemVariants}
          id="source"
        >
          <SectionTitle>
            <i className="devicon-github-original colored"></i> Source Code
          </SectionTitle>
          <SectionDescription>
            The Gaussian language is open source. You can access the source code for the interpreter, VS Code extension, 
            and documentation on GitHub.
          </SectionDescription>
          
          <DownloadCards>
            <DownloadCard
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <CardTitle>
                <i className="devicon-github-original colored"></i> GitHub Repository
              </CardTitle>
              <CardDescription>
                Access the complete source code for the Gaussian project.
              </CardDescription>
              <DownloadButton 
                href="https://github.com/gaussian-language" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </DownloadButton>
            </DownloadCard>
          </DownloadCards>
        </Section>
      </DownloadSections>
    </DownloadContainer>
  );
};

export default Download; 
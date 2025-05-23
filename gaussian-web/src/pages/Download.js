import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const ChecksumText = styled.code`
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 1rem;
  word-break: break-all;
  background: rgba(0,0,0,0.2);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`;

const DownloadButton = styled(motion.button)`
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
  border: none;
  cursor: pointer;
  
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

// Add Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: var(--background-darker);
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #f39c12; // Warning color
  }
`;

const ModalBody = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const ModalButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;

  &.primary {
    background-color: var(--primary-blue);
    color: white;
    &:hover {
      background-color: var(--secondary-blue);
    }
  }

  &.secondary {
    background-color: var(--background-light);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

// Add styled component for the Marketplace link
const MarketplaceLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #6c5ce7; // Different color for distinction
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  border: none;
  cursor: pointer;
  margin-top: 0.75rem; // Add some space above
  
  &:hover {
    background: #5849bf;
    transform: translateY(-2px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Download = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadUrlToProceed, setDownloadUrlToProceed] = useState('');

  const showWarningModal = (url) => {
    setDownloadUrlToProceed(url);
    setIsModalOpen(true);
  };

  const handleProceedDownload = () => {
    // Use window.location.href for simple downloads
    // Or implement more robust download logic if needed
    if (downloadUrlToProceed) {
      window.location.href = downloadUrlToProceed;
    }
    setIsModalOpen(false);
    setDownloadUrlToProceed('');
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
    setDownloadUrlToProceed('');
  };

  const interpreterDownloads = [
    {
      title: "Windows",
      icon: <i className="devicon-windows8-original colored"></i>,
      description: "For Windows 10/11 (.exe)",
      link: "/downloads/gaussian-win.exe",
      checksum: "9922EE263B0390A206DA273311C16F388D7AC355365A7A34980E8E5B3020C3A3",
      requiresModal: true,
    },
    {
      title: "macOS",
      icon: <i className="devicon-apple-original colored"></i>,
      description: "For macOS 11+",
      link: "/downloads/gaussian-macos-signed.pkg",
      version: "1.0.3 beta"
    },
    {
      title: "Linux",
      icon: <i className="devicon-linux-plain colored"></i>,
      description: "For Ubuntu/Debian",
      link: "/downloads/gaussian-linux",
      version: "1.0.3 beta"
    }
  ];
  
  // Simplified Animation variants
  const sectionVariants = { // Renamed from containerVariants for clarity
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 } // Simple fade-in
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 } // Simple fade-in
    },
    hover: { // Keep hover effect
      y: -5,
      boxShadow: "0 15px 25px -10px rgba(0, 0, 0, 0.4)", // Slightly adjusted hover shadow
      borderColor: "var(--primary-blue)"
    }
  };
  
  const buttonVariants = { // Keep button animations
    hover: { scale: 1.03, y: -2 },
    tap: { scale: 0.97 }
  };
  
  // Handler function to navigate to thank you page
  const handleDownloadClick = (downloadUrl, requiresModal) => {
    if (requiresModal) {
        showWarningModal(downloadUrl);
    } else {
        // Handle direct downloads for other platforms if needed
        window.location.href = downloadUrl;
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalContentVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
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
      
      <DownloadSections>
        <Section 
          variants={sectionVariants} // Apply simplified variants
          initial="hidden"
          animate="visible"
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
            {interpreterDownloads.map((dl, i) => (
              <DownloadCard 
                key={i}
                variants={cardVariants} // Apply simplified variants
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <CardTitle>
                  {dl.icon} {dl.title}
                </CardTitle>
                <CardDescription>
                  {dl.description}
                  <br />
                  <small>Version: {dl.version}</small>
                </CardDescription>
                <DownloadButton 
                  onClick={() => handleDownloadClick(dl.link, dl.requiresModal)}
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
                {dl.checksum && (
                   <ChecksumText>SHA-256: {dl.checksum}</ChecksumText>
                )}
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
          variants={sectionVariants} // Apply simplified variants
          initial="hidden"
          animate="visible"
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
              variants={cardVariants} // Apply simplified variants
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <CardTitle>
                <i className="devicon-vscode-plain colored"></i> VS Code Extension
              </CardTitle>
              <CardDescription>
                Gaussian language support for Visual Studio Code. You can also find this by searching for "Gaussian" in the VS Code Extensions view (Ctrl+Shift+X).
                <br />
                <small>Version: 0.9.0 Beta</small>
              </CardDescription>
              <DownloadButton 
                as="a"
                href="/downloads/gaussian-vscode-0.9.0.vsix"
                download
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
              {/* Add Marketplace Link */}
              <MarketplaceLink 
                href="https://marketplace.visualstudio.com/items?itemName=ChahelPaatur.gaussian" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonVariants} // Reuse button variants for consistency
                whileHover="hover"
                whileTap="tap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M13.1 1.69998C12.4 1.29998 11.6 1.29998 10.9 1.69998L2.6 6.49998C2.3 6.69998 2 7.09998 2 7.49998V16.5C2 16.9 2.3 17.3 2.6 17.5L10.9 22.3C11.6 22.7 12.4 22.7 13.1 22.3L21.4 17.5C21.7 17.3 22 16.9 22 16.5V7.49998C22 7.09998 21.7 6.69998 21.4 6.49998L13.1 1.69998ZM18.6 15.7L12 19.3V4.69998L18.6 8.29998V15.7Z" />
                </svg>
                View in Marketplace
              </MarketplaceLink>
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
      </DownloadSections>

      {/* Modal Component */}
      {isModalOpen && (
        <ModalOverlay
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.2 }}
            onClick={handleCancelModal} // Close on overlay click
        >
          <ModalContent
            variants={modalContentVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <ModalHeader>
              <i className="fas fa-exclamation-triangle"></i> Security Notice
            </ModalHeader>
            <ModalBody>
              This application is not digitally signed by a commercial Certificate Authority (which can be expensive!). Because of this, Windows SmartScreen or your antivirus might show a warning when you download or run it.
              <br /><br />
              We assure you the file is safe. You can verify the integrity of the download using the provided SHA-256 checksum.
            </ModalBody>
            <ModalFooter>
              <ModalButton className="secondary" onClick={handleCancelModal}>Cancel</ModalButton>
              <ModalButton className="primary" onClick={handleProceedDownload}>Proceed to Download</ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

    </DownloadContainer>
  );
};

export default Download; 
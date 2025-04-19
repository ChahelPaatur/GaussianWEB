import React, { useState, memo } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import styled from 'styled-components';

const Pre = styled.pre`
  background: ${themes.dracula.plain.backgroundColor};
  color: ${themes.dracula.plain.color};
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative; // For positioning the copy button
  border: 1px solid var(--border-color);

  /* Line Numbers */
  .token-line {
    line-height: inherit;
    height: inherit;
    padding-right: 1em; // Space for potential copy button
  }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  text-align: right;
  margin-right: 1em;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CodeBlockComponent = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  // Simple check for language validity, default to 'plaintext'
  const lang = language ? language.toLowerCase() : 'plaintext';

  return (
    <Highlight
      theme={themes.dracula}
      code={code.trim()} // Trim whitespace
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyButton onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </CopyButton>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default memo(CodeBlockComponent); 
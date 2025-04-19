import React from 'react';
import styled from 'styled-components';
import CodeBlock from 'components/CodeBlock';

// Re-use styled components from ControlFlow or define similar ones
const Section = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem; // Indent list items
  color: var(--text-secondary);
  margin-bottom: 1rem;
  
  li {
    margin-bottom: 0.5rem;
  }
  strong {
    color: var(--text-color);
  }
`;

const VariablesTypes = () => {
  const varCode = `
var score = 0;
val playerName = "Hero";
var position; // Initialized to nil

score = score + 10; 
// playerName = "Villain"; // Error if trying to reassign a 'val' field
position = vec2(100, 200); 
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Variables & Data Types</h2>
      
      <Section>
        <Heading>Variables</Heading>
        <Description>
          Variables store data. Use <code className="code-inline">var</code> for variables that can be reassigned (mutable), and <code className="code-inline">val</code> for variables whose assignment is fixed (immutable).
        </Description>
        <Description>
          <em>Note: While <code className="code-inline">val</code> prevents reassigning the variable itself, if it holds a mutable object (like an array or map), the object's contents can still be changed. True immutability checks might vary in edge cases during beta.</em>
        </Description>
        <CodeBlock code={varCode} language="javascript" />
      </Section>

      <Section>
        <Heading>Data Types</Heading>
        <Description>
          Gaussian supports several fundamental data types:
        </Description>
        <List>
          <li><strong>Number:</strong> Represents both integers and floating-point numbers (e.g., <code className="code-inline">10</code>, <code className="code-inline">3.14</code>, <code className="code-inline">-5.5</code>).</li>
          <li><strong>String:</strong> Sequence of characters enclosed in double quotes (e.g., <code className="code-inline">"Hello"</code>, <code className="code-inline">"Player Score: "</code>). Escaped quotes use <code className="code-inline">\"</code>.</li>
          <li><strong>Boolean:</strong> Represents logical values <code className="code-inline">true</code> or <code className="code-inline">false</code>.</li>
          <li><strong>Nil:</strong> Represents the intentional absence of a value (<code className="code-inline">nil</code>). Similar to null in other languages.</li>
          <li><strong>Array:</strong> Ordered, zero-indexed list of values of any type (e.g., <code className="code-inline">[1, "two", true, nil]</code>). Accessed using square brackets <code className="code-inline">[]</code>.</li>
          <li><strong>Map:</strong> Collection of key-value pairs (e.g., <code className="code-inline">{'{'} name: "Player", health: 100, "pos": vec2(0,0) {'}'}</code>). Keys must be numbers or strings. Accessed using square brackets <code className="code-inline">[]</code>.</li>
        </List>
      </Section>

      <Section>
        <Heading>Operators</Heading>
        <Description>
          Common operators allow manipulation and comparison of values:
        </Description>
        <List>
          <li>Arithmetic: <code className="code-inline">+</code>, <code className="code-inline">-</code>, <code className="code-inline">*</code>, <code className="code-inline">/</code> (for Numbers)</li>
          <li>String Concatenation: <code className="code-inline">+</code> (for Strings)</li>
          <li>Comparison: <code className="code-inline">></code>, <code className="code-inline">>=</code>, <code className="code-inline">&lt;</code>, <code className="code-inline">&lt;=</code> (for Numbers)</li>
          <li>Equality: <code className="code-inline">==</code> (equals), <code className="code-inline">!=</code> (not equals) (works for most types)</li>
          <li>Logical: <code className="code-inline">!</code> (not), <code className="code-inline">and</code>, <code className="code-inline">or</code> (operates on truthiness; <code className="code-inline">false</code> and <code className="code-inline">nil</code> are considered falsey, everything else is truthy)</li>
        </List>
      </Section>
    </div>
  );
};

export default VariablesTypes; 
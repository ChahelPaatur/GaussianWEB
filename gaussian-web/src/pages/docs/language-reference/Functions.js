import React from 'react';
import styled from 'styled-components';
import CodeBlock from 'components/CodeBlock'; // Absolute path

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Functions = () => {
  const greetCode = `
function greet(name) {
    print "Hello, " + name + "!";
    return name.length; // Functions can return values
}

var len = greet("Gaussian");
print "Name length: " + len;
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Functions</h2>
      <Section>
        <Description>
          Functions are blocks of reusable code defined using the <code className="code-inline">function</code> keyword. They can accept parameters and optionally return a value using the <code className="code-inline">return</code> keyword.
        </Description>
        <CodeBlock code={greetCode} language="javascript" />
      </Section>
    </div>
  );
};

export default Functions; 
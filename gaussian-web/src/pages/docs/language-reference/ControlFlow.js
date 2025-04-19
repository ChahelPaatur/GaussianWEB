import React from 'react';
import styled from 'styled-components';
import CodeBlock from 'components/CodeBlock';

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

const ControlFlow = () => {
  const ifElseCode = `
if (score > 100) {
    print "High score!";
} else if (score > 50) {
    print "Good score.";
} else {
    print "Keep trying!";
}
  `.trim();

  const whileCode = `
var i = 0;
while (i < 5) {
    print i;
    i = i + 1;
}
  `.trim();

  const forCode = `
for (var j = 0; j < 3; j = j + 1) {
    print "j = " + j;
}
  `.trim();

  const eachCode = `
var names = ["Alice", "Bob", "Charlie"];
each (name in names) {
    print "Hello, " + name;
}
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Control Flow</h2>
      
      <Section>
        <Heading>If/Else</Heading>
        <Description>
          Conditionally execute code blocks based on boolean expressions. Supports standard <code className="code-inline">if</code>, <code className="code-inline">else if</code>, and <code className="code-inline">else</code> clauses.
        </Description>
        <CodeBlock code={ifElseCode} language="javascript" />
      </Section>

      <Section>
        <Heading>While Loop</Heading>
        <Description>
          Repeatedly executes a block of code as long as a specified condition remains true.
        </Description>
        <CodeBlock code={whileCode} language="javascript" />
      </Section>

      <Section>
        <Heading>For Loop (C-style)</Heading>
        <Description>
          Provides a classic C-style loop with initialization, condition checking, and increment steps.
        </Description>
        <CodeBlock code={forCode} language="javascript" />
      </Section>

      <Section>
        <Heading>Each Loop (Arrays/Strings)</Heading>
        <Description>
          Iterates over the elements of an array or the characters of a string, assigning each element/character to a variable in turn.
        </Description>
        <CodeBlock code={eachCode} language="javascript" />
      </Section>
    </div>
  );
};

export default ControlFlow; 
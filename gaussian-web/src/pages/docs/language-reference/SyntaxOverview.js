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

const SyntaxOverview = () => {
  const commentCode = `
// Single-line comments start with //
// Everything after // on the same line is ignored.

var score = 100; // Initial score
// print score; // This line is commented out
  `.trim();

  const keywordsCode = `
var x;       // Declare mutable variable
val y = 10;  // Declare immutable constant
if (x > y) { ... } else { ... }
while (condition) { ... }
for (item in list) { ... }
function name(...) { ... }
class MyClass { ... }
return value;
import "module_name";
nil; true; false; // Literal values
  `.trim();

  const operatorsCode = `
// Arithmetic
var sum = a + b;
var diff = a - b;
var prod = a * b;
var quot = a / b;
var rem = a % b; // Modulo

// Assignment
var x = 5; // Simple assignment
x = x + 1; // Reassignment
// Note: Gaussian does not currently support compound assignment like +=, -=, etc.
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Syntax Overview</h2>
      
      <Section>
        <Description>
          Gaussian uses a syntax inspired by languages like JavaScript, Python, and C#. It aims for readability and ease of use, especially for game development tasks. Key features include dynamic typing, familiar control flow structures, functions, and classes.
        </Description>
      </Section>
      
      <Section>
        <Heading>Comments</Heading>
        <Description>
          Use comments to explain parts of your code or temporarily disable lines. Gaussian only supports single-line comments starting with <code className="code-inline">//</code>. Everything from <code className="code-inline">//</code> to the end of the line is ignored by the interpreter.
        </Description>
        <CodeBlock code={commentCode} language="javascript" />
      </Section>

      <Section>
        <Heading>Keywords</Heading>
        <Description>
          Keywords are reserved words that have special meaning in the language and cannot be used as identifiers (variable names, function names, etc.). Here are some important keywords:
        </Description>
        <CodeBlock code={keywordsCode} language="javascript" />
        <Description>
          Keywords include those for variable declaration (<code className="code-inline">var</code>, <code className="code-inline">val</code>), control flow (<code className="code-inline">if</code>, <code className="code-inline">else</code>, <code className="code-inline">while</code>, <code className="code-inline">for</code>, <code className="code-inline">in</code>, <code className="code-inline">return</code>), structure definition (<code className="code-inline">function</code>, <code className="code-inline">class</code>), module handling (<code className="code-inline">import</code>), and basic values (<code className="code-inline">nil</code>, <code className="code-inline">true</code>, <code className="code-inline">false</code>).
        </Description>
      </Section>

      <Section>
        <Heading>Identifiers</Heading>
        <Description>
          Identifiers are names you give to variables, functions, classes, etc. They must start with a letter or underscore (<code className="code-inline">_</code>) and can be followed by letters, numbers, or underscores. Identifiers are case-sensitive (<code className="code-inline">myVariable</code> is different from <code className="code-inline">myvariable</code>).
        </Description>
        {/* Optional: Add examples of valid/invalid identifiers */}
      </Section>

      <Section>
        <Heading>Operators</Heading>
        <Description>
          Gaussian supports common operators for arithmetic, comparison, logical operations, and assignment.
        </Description>
        <CodeBlock code={operatorsCode} language="javascript" />
        <Description>
          Parentheses <code className="code-inline">()</code> can be used to control the order of operations, just like in standard mathematics.
        </Description>
      </Section>

      <Section>
        <Heading>Blocks and Statements</Heading>
        <Description>
          Code is organized into statements, which typically end implicitly at the end of a line (semicolons <code className="code-inline">;</code> are generally optional but can be used to separate multiple statements on a single line).
        </Description>
        <Description>
          Blocks of code, such as those associated with <code className="code-inline">if</code>, <code className="code-inline">while</code>, <code className="code-inline">function</code>, or <code className="code-inline">class</code> definitions, are enclosed in curly braces <code className="code-inline">{'{ }'}</code>.
        </Description>
      </Section>

      {/* Add more sections for basic types, function calls, etc. as needed */}

    </div>
  );
};

export default SyntaxOverview; 
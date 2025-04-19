import React from 'react';
import styled from 'styled-components';
import CodeBlock from 'components/CodeBlock'; // Absolute path

// Re-use styled components or define new ones as needed
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
  padding-left: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  
  li {
    margin-bottom: 0.5rem;
  }
  code {
    font-size: 0.85em;
    background: rgba(0,0,0,0.3);
    border-radius: 4px;
    padding: 0.2rem 0.4rem;
  }
`;

const NativeFunctions = () => {
  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Built-in Functions</h2>
      <Description>
        Gaussian provides a range of globally available built-in functions for common tasks like math operations, string manipulation, type conversion, and timing. These functions can be called directly from anywhere in your code without needing an <code className="code-inline">import</code> statement.
      </Description>

      <Section>
        <Heading>Math</Heading>
        <List>
          <li><code>sqrt(n)</code>: Square root of n.</li>
          <li><code>abs(n)</code>: Absolute value of n.</li>
          <li><code>random()</code>: Random float between 0.0 (inclusive) and 1.0 (exclusive).</li>
          <li><code>floor(n)</code>: Largest integer less than or equal to n.</li>
          <li><code>ceil(n)</code>: Smallest integer greater than or equal to n.</li>
          <li><code>round(n)</code>: Rounds n to the nearest integer.</li>
          <li><code>sin(rad)</code>, <code>cos(rad)</code>, <code>tan(rad)</code>: Trig functions (angle in radians).</li>
          <li><code>pow(base, exp)</code>: Base to the power of exponent.</li>
          <li><code>min(n1, n2, ...)</code>: Smallest of the given numbers.</li>
          <li><code>max(n1, n2, ...)</code>: Largest of the given numbers.</li>
        </List>
      </Section>

      <Section>
        <Heading>String</Heading>
        <List>
          <li><code>len(string)</code>: Returns the string's length.</li>
          <li><code>toUpperCase(string)</code>: Returns uppercase version.</li>
          <li><code>toLowerCase(string)</code>: Returns lowercase version.</li>
          <li><code>substring(str, start, end?)</code>: Extracts substring (end index is optional and exclusive).</li>
          <li><code>str(value)</code>: Converts any value to its string representation.</li>
        </List>
      </Section>

      <Section>
        <Heading>Type Conversion</Heading>
        <List>
          <li><code>num(value)</code>: Converts a string or boolean to a number (returns <code>nil</code> on failure).</li>
        </List>
      </Section>

      <Section>
        <Heading>Array</Heading>
        <List>
          <li><code>len(array)</code>: Returns the number of elements.</li>
          <li><code>push(array, element)</code>: Appends element to the end (mutates the array, returns <code>nil</code>).</li>
          <li><code>pop(array)</code>: Removes and returns the last element (mutates the array).</li>
        </List>
      </Section>

      <Section>
        <Heading>Vector (Vec2)</Heading>
        <Description>Represents a 2D vector with <code>x</code> and <code>y</code> properties.</Description>
        <List>
          <li><code>vec2(x, y)</code>: Creates a new Vec2 instance.</li>
          <li><code>Vec2(x, y)</code>: Native constructor (e.g., <code>var v = Vec2(1, 2); print v.x;</code>).</li>
          <li><code>vecAdd(v1, v2)</code>: Vector addition.</li>
          <li><code>vecSub(v1, v2)</code>: Vector subtraction.</li>
          <li><code>vecScale(vector, scalar)</code>: Scalar multiplication.</li>
          <li><code>vecMag(vector)</code> / <code>vecLength(vector)</code>: Magnitude (length).</li>
          <li><code>vecNorm(vector)</code> / <code>vecNormalize(vector)</code>: Normalized (unit) vector.</li>
          <li><code>vecDot(v1, v2)</code>: Dot product.</li>
        </List>
      </Section>

      <Section>
        <Heading>Time</Heading>
        <List>
          <li><code>clock()</code>: Time elapsed since program start (seconds).</li>
          <li><code>wait(seconds)</code>: Pauses script execution.</li>
          <li><code>after(seconds) do {'{...}'}</code>: Executes block once after delay (non-blocking).</li>
          <li><code>loop every(seconds) do {'{...}'}</code>: Executes block repeatedly (non-blocking).</li>
          <li><code>tick()</code>: Engine function; updates timers, returns delta time.</li>
        </List>
      </Section>

      <Section>
        <Heading>Misc</Heading>
        <List>
          <li><code>print(value)</code>: Prints value's string representation to console.</li>
          <li><code>Color(r, g, b, a)</code>: Native constructor for Color objects (0-255).</li>
          <li><code>Rectangle(x, y, width, height)</code>: Native constructor for Rectangle objects.</li>
        </List>
      </Section>
    </div>
  );
};

export default NativeFunctions; 
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

const ClassesObjects = () => {
  const playerCode = `
class Player {
    var x = 0;
    val speed = 5;

    // Initializer (constructor)
    init(startX) {
        this.x = startX; // Access fields using 'this'
        print "Player created at x=" + this.x;
    }

    function move(dx) {
        this.x = this.x + dx * this.speed;
    }
}

var p = Player(50); // Create instance
p.move(10);      // Call method
print "Player position: " + p.x; // Access field
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Classes & Objects</h2>
      <Section>
        <Description>
          Define custom data structures and associated behaviors using classes. Use the <code className="code-inline">class</code> keyword. Instances (objects) are created by calling the class name like a function, passing arguments to the <code className="code-inline">init</code> method (constructor).
        </Description>
        <Description>
          Inside methods, use <code className="code-inline">this</code> to refer to the instance's fields and other methods.
        </Description>
        <CodeBlock code={playerCode} language="javascript" />
      </Section>
    </div>
  );
};

export default ClassesObjects; 
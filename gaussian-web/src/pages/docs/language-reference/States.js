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

const States = () => {
  const stateCode = `
class Enemy {
    state idle {
        image: "enemy_idle.png" 
        before { print "Enemy idling"; }
    }
    state chasing {
        image: "enemy_chase.png"
        before { print "Enemy chasing!"; }
    }

    init() {
        switch_state idle; // Set initial state
    }

    function startChase() {
        switch_state chasing;
    }
}

var e = Enemy();
e.startChase();
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>States</h2>
      <Section>
        <Description>
          States provide a simple finite state machine concept within classes. Define states using the <code className="code-inline">state</code> keyword, optionally including properties (like <code className="code-inline">image</code>) and <code className="code-inline">before</code>/<code className="code-inline">after</code> blocks that execute on state entry/exit.
        </Description>
        <Description>
          Use <code className="code-inline">switch_state stateName;</code> to transition the object to a different state.
        </Description>
        <CodeBlock code={stateCode} language="javascript" />
      </Section>
    </div>
  );
};

export default States; 
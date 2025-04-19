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

const SubHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Warning = styled.div`
  background-color: rgba(255, 165, 0, 0.1);
  border-left: 4px solid orange;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 4px;
  color: orange;

  strong {
    color: orange; // Ensure strong tag inherits color
  }
  code {
     background: rgba(255, 165, 0, 0.2);
     color: inherit;
     padding: 0.2rem 0.4rem;
     border-radius: 3px;
  }
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }
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

const AIIntegration = () => {
  const functionCode = `ai_get_action(prompt: string) -> string | nil`.trim();
  
  const exampleCode = `
var npcState = "Status: Healthy. Location: Forest Path. Nearby: Player. Goal: Patrol area.";
var actions = ["ContinuePatrol", "AttackPlayer", "Hide", "LookAround"];
var actionListString = str(actions); // Convert array to string for prompt

var prompt = "You are an NPC guard described by: " + npcState + 
             ". Choose ONE action from the following list: " + actionListString + 
             ". Respond with ONLY the chosen action name.";

var chosenAction = ai_get_action(prompt);

if (chosenAction != nil) {
    print "AI chose action: " + chosenAction;
    // Add logic to perform the chosen action...
} else {
    print "AI action failed.";
}
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>AI Integration (Experimental)</h2>
      <Section>
        <Description>
          Gaussian includes an experimental function to interact with AI models (specifically Google Gemini Pro via its REST API) to generate text, such as NPC actions or dialogue, based on a prompt.
          Being experimental, the exact function signature, underlying model, or required setup might change in future versions.
        </Description>
        
        <SubHeading>API Key Setup</SubHeading>
        <Warning>
          <p><strong>IMPORTANT SECURITY & SETUP NOTES:</strong></p>
          <ul>
              <li>Obtain a Gemini API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>.</li>
              <li>For this prototype, the API key must be set as an environment variable named <code className="code-inline">GEMINI_API_KEY</code> on the machine running the Gaussian interpreter (<code className="code-inline">gasrun</code>). Consult your operating system documentation for setting environment variables (e.g., using <code className="code-inline">export</code> on macOS/Linux or <code className="code-inline">set</code>/<code>$env:</code> on Windows).</li>
              <li>Alternatively, create a <code className="code-inline">.env</code> file in your project's root directory containing <code className="code-inline">GEMINI_API_KEY=YOUR_API_KEY_HERE</code>. This method requires installing the <code className="code-inline">dotenv</code> package in your Gaussian project environment if applicable, or ensuring your execution context loads <code className="code-inline">.env</code> files.</li>
              <li><strong>Never commit your API key</strong> to version control (like Git) or share it publicly.</li>
              <li>API usage may incur costs. Monitor your usage via the Google AI platform.</li>
          </ul>
        </Warning>

        <SubHeading>Function: <code style={{fontSize: '1.1rem'}}>ai_get_action</code></SubHeading>
        <CodeBlock code={functionCode} language="plaintext" />
        <List>
          <li>Sends the provided <code className="code-inline">prompt</code> string to the Gemini Pro model.</li>
          <li>Returns the generated text response as a string on success.</li>
          <li>Returns <code className="code-inline">nil</code> if the API key is missing, a network error occurs, or the API response cannot be parsed correctly.</li>
          <li>May throw a <code className="code-inline">RuntimeError</code> if the API itself returns an error status (e.g., invalid request, rate limit exceeded).</li>
        </List>

        <SubHeading>Example Prompt for NPC Action</SubHeading>
        <Description>
          Structure your prompts clearly to guide the AI. For NPC actions, providing context (state, location, goal) and a list of valid actions is recommended:
        </Description>
        <CodeBlock code={exampleCode} language="javascript" />
      </Section>
    </div>
  );
};

export default AIIntegration; 
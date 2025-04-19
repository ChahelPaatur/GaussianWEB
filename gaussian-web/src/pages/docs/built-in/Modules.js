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

const Modules = () => {
  const importCode = `
# Import necessary modules at the top of your script
import "graphics";
import "input";
import "audio"; 
  `.trim();

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Built-in Modules (import)</h2>
      <Section>
        <Description>
          Gaussian uses modules to organize functionality related to specific domains like graphics, input, and audio. You need to explicitly import these modules using the <code className="code-inline">import</code> keyword (typically at the start of your script) to gain access to their functions.
        </Description>
        <Description>
           Once imported, functions within a module are accessed using dot notation, like <code className="code-inline">ModuleName.functionName(...)</code>.
        </Description>
        <CodeBlock code={importCode} language="javascript" />
      </Section>

      <Section>
        <Heading>Graphics (Wraps Raylib)</Heading>
        <Description>
          The <code className="code-inline">graphics</code> module provides the core functionality for creating windows, drawing shapes, rendering textures, managing cameras, and basic 2D collision detection. It acts as a high-level wrapper around many common functions from the popular <a href="https://www.raylib.com/" target="_blank" rel="noopener noreferrer">Raylib</a> C library, making graphics programming more accessible within Gaussian.
        </Description>
        <Description>Common uses include setting up the game window, drawing game objects each frame, and clearing the screen.</Description>
        <List>
          <li><code>Graphics.initWindow(width, height, title)</code></li>
          <li><code>Graphics.windowShouldClose()</code></li>
          <li><code>Graphics.closeWindow()</code></li>
          <li><code>Graphics.beginDrawing()</code>, <code>Graphics.endDrawing()</code></li>
          <li><code>Graphics.clearBackground(color)</code></li>
          <li><code>Graphics.drawCircle(x, y, radius, color)</code></li>
          <li><code>Graphics.drawRectangle(x, y, width, height, color)</code></li>
          <li><code>Graphics.drawText(text, x, y, fontSize, color)</code></li>
          <li><code>Graphics.loadTexture(path)</code>, <code>Graphics.unloadTexture(texture)</code></li>
          <li><code>Graphics.drawTexture(texture, x, y, tint)</code></li>
          <li><code>Graphics.drawTexturePro(...)</code></li>
          <li><code>Graphics.checkCollisionRecs(rec1, rec2)</code></li>
          <li><code>Graphics.getFrameTime()</code>, <code>Graphics.setTargetFPS(fps)</code></li>
          <li>... and many more reflecting the Raylib API.</li>
        </List>
      </Section>

      <Section>
        <Heading>Input (Wraps Raylib)</Heading>
        <Description>
          The <code className="code-inline">input</code> module handles user interaction. It allows you to check the state of keyboard keys, mouse buttons, and mouse position. Like the graphics module, it wraps corresponding Raylib input functions.
        </Description>
        <Description>Use this module in your game loop to poll for player input and react accordingly.</Description>
        <List>
          <li><code>Input.isKeyDown(key)</code>, <code>Input.isKeyPressed(key)</code></li>
          <li><code>Input.getMouseX()</code>, <code>Input.getMouseY()</code></li>
          <li><code>Input.isMouseButtonPressed(button)</code></li>
          <li><code>Input.checkCollisionPointRec(pointVec2, rectangle)</code></li>
          <li>Key codes: Access via constants like <code>Input.Keys.KEY_SPACE</code>, <code>Input.Keys.KEY_UP</code>.</li>
          <li>Mouse buttons: Access via constants like <code>Input.Mouse.MOUSE_LEFT_BUTTON</code>.</li>
        </List>
      </Section>

      <Section>
        <Heading>Audio (Wraps Raylib)</Heading>
        <Description>
           The <code className="code-inline">audio</code> module provides functions for loading and playing sound effects (as <code className="code-inline">Sound</code> objects) and streaming longer music files (as <code className="code-inline">Music</code> objects). It relies on Raylib's audio capabilities.
        </Description>
        <Description>Remember to initialize the audio device using Raylib functions if needed (often handled within graphics initialization depending on the underlying setup).</Description>
        <List>
          <li><code>Audio.loadSound(path)</code>, <code>Audio.playSound(sound)</code>, <code>Audio.unloadSound(sound)</code></li>
          <li><code>Audio.loadMusicStream(path)</code>, <code>Audio.playMusicStream(music)</code>, <code>Audio.stopMusicStream(music)</code>, <code>Audio.updateMusicStream(music)</code>, <code>Audio.unloadMusicStream(music)</code></li>
        </List>
      </Section>
    </div>
  );
};

export default Modules; 
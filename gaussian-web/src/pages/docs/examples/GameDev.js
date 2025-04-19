import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CodeBlock from 'components/CodeBlock'; // Adjust path if needed
// Import game images
import pongGamePng from '../../../assets/images/pong.png';
import snakeGamePng from '../../../assets/images/snake.png';

const PageContainer = styled.div`
  /* Add styles for the page container if needed */
`;

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

// Placeholder for visual examples/images
const VisualPlaceholder = styled.div`
  background-color: rgba(0,0,0,0.2); // Slightly different placeholder color
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-style: italic;
  text-align: center;
`;

// NEW: Styled component for game screenshots
const GameScreenshot = styled.img`
  display: block;
  max-width: 80%; // Limit width, adjust as needed
  margin: 1.5rem auto; // Center horizontally
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

// Wrapper for expandable code blocks
const ExpandableCodeWrapper = styled.div`
  position: relative;
  max-height: ${({ isExpanded }) => isExpanded ? 'none' : '400px'}; // Limit height when collapsed
  overflow: hidden;
  transition: max-height 0.5s ease-out; // Smooth transition
  border-radius: 8px; // Match CodeBlock rounding potentially

  /* Fade-out effect at the bottom when collapsed */
  &:not(.expanded)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px; // Height of the fade
    background: linear-gradient(to bottom, transparent, var(--primary-dark)); // Adjust color to match background
    pointer-events: none; // Allow clicking through the fade
  }
`;

// Button to toggle expansion
const ToggleButton = styled.button`
  display: block;
  margin: 0.75rem auto 1.5rem; // Center button below code
  padding: 0.5rem 1rem;
  background: var(--accent-blue);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--secondary-blue);
    color: var(--text-color);
  }
`;

const GameDev = () => {
  // --- State for Expandable Code --- 
  const [pongCodeExpanded, setPongCodeExpanded] = useState(false);
  const [snakeCodeExpanded, setSnakeCodeExpanded] = useState(false);

  const pongGameCode = `
import "graphics";
import "input";

print "--- Pong Game Start ---";

// --- Constants ---
var screenWidth = 800;
var screenHeight = 600;
var white = Color(255, 255, 255, 255);
var paddleSpeed = 300;
var ballSpeed = 350;
var maxBounceAngleFactor = 0.8;

// --- Paddle Class ---
class Paddle {
    function init(x, y, width, height, upKey, downKey, speed) {
        this.rect = Rectangle(x, y, width, height);
        this.upKey = upKey;
        this.downKey = downKey;
        this.speed = speed;
        this.score = 0;
    }

    function update(dt) {
        if (Input.isKeyDown(this.upKey)) {
            this.rect.y = this.rect.y - this.speed * dt;
        }
        if (Input.isKeyDown(this.downKey)) {
            this.rect.y = this.rect.y + this.speed * dt;
        }

        if (this.rect.y < 0) this.rect.y = 0;
        if (this.rect.y + this.rect.height > screenHeight) {
             this.rect.y = screenHeight - this.rect.height;
        }
    }

    function draw() {
        Graphics.drawRectangle(this.rect.x, this.rect.y, this.rect.width, this.rect.height, white);
    }
}

// --- Ball Class ---
class Ball {
    // Properties initialized in init

    function init(x, y, size, velX, velY) {
        this.pos = Vec2(x, y);
        this.size = size; // Keep size for calculations
        this.velocity = Vec2(velX, velY);
        this.texture = nil; // Initialize texture var
        
        // Load the texture
        print "Loading ball texture...";
        // IMPORTANT: Requires 'tennis.png' in the same directory as the script/executable
        this.texture = Graphics.loadTexture("tennis.png"); 
        if (this.texture == nil) {
            print "WARNING: Failed to load ball texture!";
        } else {
            print "Ball texture loaded.";
        }
    }

    function getRect() {
        return Rectangle(this.pos.x - this.size / 2, this.pos.y - this.size / 2, this.size, this.size);
    }

    function update(dt, paddle1, paddle2) {
        var scaledVelocity = vecScale(this.velocity, dt);
        this.pos = vecAdd(this.pos, scaledVelocity);

        // Collision with top/bottom walls
        if (this.pos.y - this.size / 2 < 0 or this.pos.y + this.size / 2 > screenHeight) {
            this.velocity.y = -this.velocity.y;
            if (this.pos.y - this.size / 2 < 0) this.pos.y = this.size / 2;
            if (this.pos.y + this.size / 2 > screenHeight) this.pos.y = screenHeight - this.size / 2;
        }

        // Collision with paddles (Refined)
        var ballRect = this.getRect();
        var collidedPaddle = nil;
        
        if (Graphics.checkCollisionRecs(ballRect, paddle1.rect)) {
            collidedPaddle = paddle1;
        } else if (Graphics.checkCollisionRecs(ballRect, paddle2.rect)) {
            collidedPaddle = paddle2;
        }

        if (collidedPaddle != nil) {
            var paddleCenterY = collidedPaddle.rect.y + collidedPaddle.rect.height / 2;
            var intersectY = this.pos.y - paddleCenterY;
            var normalizedIntersectY = intersectY / (collidedPaddle.rect.height / 2);
            
            if (normalizedIntersectY > 1.0) normalizedIntersectY = 1.0;
            if (normalizedIntersectY < -1.0) normalizedIntersectY = -1.0;

            this.velocity.x = -this.velocity.x; 
            this.velocity.y = normalizedIntersectY * ballSpeed * maxBounceAngleFactor;
            
            // Prevent ball sticking
            if (this.velocity.x > 0) { 
                 this.pos.x = collidedPaddle.rect.x + collidedPaddle.rect.width + this.size / 2 + 1;
            } else { 
                 this.pos.x = collidedPaddle.rect.x - this.size / 2 - 1;
            }
        }

        // Scoring
        if (this.pos.x + this.size / 2 < 0) {
            print "Player 2 scores!";
            paddle2.score = paddle2.score + 1;
            this.reset();
        } else if (this.pos.x - this.size / 2 > screenWidth) {
            print "Player 1 scores!";
            paddle1.score = paddle1.score + 1;
            this.reset();
        }
    }

    function draw() {
        if (this.texture != nil) {
            var sourceRec = Rectangle(0, 0, this.texture.width, this.texture.height);
            var destRec = Rectangle(this.pos.x, this.pos.y, this.size, this.size);
            var origin = Vec2(this.size / 2, this.size / 2);
            var rotation = 0.0;
            Graphics.drawTexturePro(this.texture, sourceRec, destRec, origin, rotation, white);
        } else {
            var r = this.getRect();
            Graphics.drawRectangle(r.x, r.y, r.width, r.height, white);
        }
    }

    function reset() {
        this.pos.x = screenWidth / 2;
        this.pos.y = screenHeight / 2;
        this.velocity.x = -this.velocity.x; 
        // Flip Y velocity direction randomly
        if (random() < 0.5) { this.velocity.y = -this.velocity.y; }
        // Ensure Y velocity has some magnitude if it was zero
        if (this.velocity.y == 0) { this.velocity.y = (random() < 0.5 ? -1 : 1) * ballSpeed * 0.5; } 
    }
    
    function unload() {
        if (this.texture != nil) {
            print "Unloading ball texture...";
            Graphics.unloadTexture(this.texture);
            this.texture = nil; 
            print "Ball texture unloaded.";
        }
    }
}

// --- Main Game Setup ---
Graphics.initWindow(screenWidth, screenHeight, "Gaussian Pong");
Graphics.setTargetFPS(60);

var player1 = Paddle(20, screenHeight / 2 - 50, 15, 100, Input.Keys.KEY_W, Input.Keys.KEY_S, paddleSpeed);
var player2 = Paddle(screenWidth - 20 - 15, screenHeight / 2 - 50, 15, 100, Input.Keys.KEY_UP, Input.Keys.KEY_DOWN, paddleSpeed);
var ball = Ball(screenWidth / 2, screenHeight / 2, 30, ballSpeed, ballSpeed);

// --- Main Game Loop ---
while (!Graphics.windowShouldClose()) {
    // Update
    var dt = Graphics.getFrameTime();
    player1.update(dt);
    player2.update(dt);
    ball.update(dt, player1, player2);

    // Draw
    Graphics.beginDrawing();
    Graphics.clearBackground(Color(0, 0, 0, 255)); // Black background

    player1.draw();
    player2.draw();
    ball.draw();

    // Draw scores
    Graphics.drawText("" + player1.score, screenWidth / 4, 20, 40, white);
    Graphics.drawText("" + player2.score, 3 * screenWidth / 4, 20, 40, white);

    // Draw middle line (optional)
    Graphics.drawRectangle(screenWidth / 2 - 2, 0, 4, screenHeight, white);

    Graphics.endDrawing();
}

// Unload ball texture before closing
ball.unload();

Graphics.closeWindow();
print "--- Pong Game Complete ---";
  `.trim();

  // New Example 4: Snake Game
  const snakeGameCode = `
import "graphics";
import "input";
import "audio";

print "--- Snake Game Initializing ---";

// --- Configuration ---
var gridSize = 20;        // Size of each grid square in pixels
var gridWidth = 25;       // Width of the game area in grid units
var gridHeight = 20;      // Height of the game area in grid units
var screenWidth = gridSize * gridWidth;
var screenHeight = gridSize * gridHeight;

var bgColor = Color(40, 40, 60, 255); // Dark blue-gray
var snakeColor = Color(0, 200, 0, 255); // Green
var headColor = Color(0, 255, 0, 255);  // Brighter green for head
var foodColor = Color(255, 0, 0, 255);  // Red
var textColor = Color(230, 230, 230, 255); // Light gray

var initialSpeed = 0.15; // Time (seconds) between updates (lower is faster)
var speedIncreaseFactor = 0.98; // Multiplies speed each time food is eaten
var minSpeed = 0.05;     // Fastest speed allowed

// --- Game State Variables --- 
var snake;        // Array of Vec2 positions {x, y} in GRID coordinates
var food;         // Vec2 position {x, y} of food in GRID coordinates
var direction;    // Vec2 {x, y} representing current movement direction (e.g., {1, 0} for right)
var newDirection; // Vec2 {x, y} for next direction queued by input
var score;
var gameOver;
var musicPlaying;
var currentSpeed; // Current update interval
var moveTimer;    // Timer to control movement speed

// --- Asset Loading --- 
print "Loading audio...";
// var fxEat = Audio.loadSound("eat.wav"); // Disabled
// var fxHit = Audio.loadSound("hit.wav"); // Disabled

// IMPORTANT: Requires 'music.ogg' in the same directory as the script/executable
var bgMusic = Audio.loadMusicStream("music.ogg"); 
var musicPlaying = false; 
if (bgMusic != nil) {
    print "Background music loaded.";
} else {
    print "WARNING: Failed to load background music: music.ogg"; 
}

// --- Helper: Place Food Randomly ---
function placeFood() {
    var placedFood = false;
    while (!placedFood) {
        food = vec2(floor(random() * gridWidth), floor(random() * gridHeight));
        var onSnake = false;
        each (segment in snake) {
            if (segment.x == food.x and segment.y == food.y) {
                onSnake = true;
            }
        }
        if (!onSnake) placedFood = true;
    }
    print "Placed food at: " + food.x + ", " + food.y;
}

// --- Game Reset Function ---
function resetGame() {
    print "Resetting game...";
    var startX = floor(gridWidth / 2);
    var startY = floor(gridHeight / 2);
    snake = [ vec2(startX - 2, startY), vec2(startX - 1, startY), vec2(startX, startY) ]; 
    direction = vec2(1, 0); 
    newDirection = vec2(1, 0); 
    placeFood(); 
    score = 0;
    gameOver = false;
    currentSpeed = initialSpeed;
    moveTimer = 0.0;
    print "Game reset complete.";
}

// --- Cleanup Function ---
function cleanup() {
    print "Cleaning up...";
    // Audio.unloadSound(fxEat); // Disabled
    // Audio.unloadSound(fxHit); // Disabled
    if (bgMusic != nil) {
        Audio.stopMusicStream(bgMusic); 
        Audio.unloadMusicStream(bgMusic); 
        print "Music unloaded.";
    }
    Graphics.closeWindow();
    print "--- Snake Game Complete ---";
}

// --- Main Game Setup ---
Graphics.initWindow(screenWidth, screenHeight, "Gaussian Snake");
Graphics.setTargetFPS(60);
resetGame(); 

if (bgMusic != nil) {
    print "Starting background music...";
    Audio.playMusicStream(bgMusic);
    musicPlaying = true;
} else {
    musicPlaying = false;
}

// --- Main Game Loop ---
while (!Graphics.windowShouldClose()) {
    var dt = Graphics.getFrameTime(); 

    if (musicPlaying and bgMusic != nil) Audio.updateMusicStream(bgMusic);

    // --- Input Handling ---
    if (gameOver) {
        if (Input.isKeyPressed(Input.Keys.KEY_R)) {
            resetGame();
            if (bgMusic != nil) {
                 print "Restarting music...";
                 Audio.stopMusicStream(bgMusic); 
                 Audio.playMusicStream(bgMusic);
                 musicPlaying = true;
            }
        }
    } else {
        if (Input.isKeyPressed(Input.Keys.KEY_UP) and direction.y == 0) newDirection = vec2(0, -1);
        else if (Input.isKeyPressed(Input.Keys.KEY_DOWN) and direction.y == 0) newDirection = vec2(0, 1);
        else if (Input.isKeyPressed(Input.Keys.KEY_LEFT) and direction.x == 0) newDirection = vec2(-1, 0);
        else if (Input.isKeyPressed(Input.Keys.KEY_RIGHT) and direction.x == 0) newDirection = vec2(1, 0);
    } 
    
    // --- Game Logic Update (Timer based) ---
    if (!gameOver) {
        moveTimer = moveTimer + dt;
        if (moveTimer >= currentSpeed) {
            moveTimer = moveTimer - currentSpeed;
            direction = newDirection;
            var head = snake[len(snake) - 1];
            var newHead = vecAdd(head, direction);

            // Check Wall Collision
            if (newHead.x < 0 or newHead.x >= gridWidth or newHead.y < 0 or newHead.y >= gridHeight) {
                gameOver = true; print "Hit wall!";
                if (musicPlaying and bgMusic != nil) { Audio.stopMusicStream(bgMusic); musicPlaying = false; }
            }

            // Check Self Collision
            if (!gameOver) { 
                var hitSelf = false; 
                each (segment in snake) { if (segment.x == newHead.x and segment.y == newHead.y) hitSelf = true; }
                if (hitSelf) {
                     gameOver = true; print "Hit self!";
                     if (musicPlaying and bgMusic != nil) { Audio.stopMusicStream(bgMusic); musicPlaying = false; }
                }
            }

            // Process Movement / Eating
            if (!gameOver) {
                push(snake, newHead);
                if (newHead.x == food.x and newHead.y == food.y) {
                    score = score + 1; print "Ate food! Score: " + score;
                    placeFood();
                    currentSpeed = currentSpeed * speedIncreaseFactor;
                    if (currentSpeed < minSpeed) currentSpeed = minSpeed; 
                } else {
                    // Workaround to remove first element
                    var newSnake = [];
                    for (var i = 1; i < len(snake); i = i + 1) push(newSnake, snake[i]);
                    snake = newSnake; 
                }
            }
        } // End if (moveTimer >= currentSpeed)
    } // End if (!gameOver) 

    // --- Draw ---
    Graphics.beginDrawing();
    Graphics.clearBackground(bgColor);

    for (var i = 0; i < len(snake); i = i + 1) {
        var segment = snake[i];
        var color = (i == len(snake) - 1) ? headColor : snakeColor;
        Graphics.drawRectangle(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1, color);
    }

    Graphics.drawRectangle(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1, foodColor);
    Graphics.drawText("Score: " + score, 10, 10, 20, textColor);

    if (gameOver) {
        var msg = "Game Over! Score: " + score;
        var restartMsg = "Press R to Restart";
        Graphics.drawText(msg, screenWidth / 2 - 150, screenHeight / 2 - 40, 30, Color(255, 0, 0, 255)); 
        Graphics.drawText(restartMsg, screenWidth / 2 - 100, screenHeight / 2 + 10, 20, textColor);
    }

    Graphics.endDrawing();
} // End Main Game Loop

// --- Call Cleanup ---
cleanup();
  `.trim();

  return (
    <PageContainer>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Game Development Examples</h2>
      <Description>
        This section provides practical examples of how to use Gaussian for common game development tasks.
        Feel free to modify and experiment with the code below.
      </Description>

      <Section>
        <Heading>Example 1: Complete Pong Game</Heading>
        <Description>
          A more complete example demonstrating classes, input handling, basic physics, 
          collision detection, scoring, and texture loading for a simple Pong game.
        </Description>
        <Description>
          <strong>Note:</strong> This code requires an image file named <code className="code-inline">tennis.png</code> 
          to be placed in the same directory where you run the Gaussian script or executable.
        </Description>
        <ExpandableCodeWrapper 
            isExpanded={pongCodeExpanded} 
            className={pongCodeExpanded ? 'expanded' : ''}
        >
            <CodeBlock code={pongGameCode} language="javascript" />
        </ExpandableCodeWrapper>
        <ToggleButton onClick={() => setPongCodeExpanded(!pongCodeExpanded)}>
            {pongCodeExpanded ? 'Show Less' : 'Show More'}
        </ToggleButton>
        <GameScreenshot src={pongGamePng} alt="Pong Game Screenshot" />
      </Section>

      <Section>
        <Heading>Example 2: Complete Snake Game</Heading>
        <Description>
          A classic Snake game implementation. This example showcases grid-based movement, 
          timed updates, collision detection (walls and self), array manipulation (for the snake body), 
          scoring, game state management (game over), and background music streaming.
        </Description>
        <Description>
          <strong>Note:</strong> This code requires an OGG audio file named <code className="code-inline">music.ogg</code> 
          to be placed in the same directory where you run the Gaussian script or executable. 
          Sound effects (<code className="code-inline">eat.wav</code>, <code className="code-inline">hit.wav</code>) are commented out but could be added similarly.
        </Description>
        <ExpandableCodeWrapper 
            isExpanded={snakeCodeExpanded}
            className={snakeCodeExpanded ? 'expanded' : ''}
        >
            <CodeBlock code={snakeGameCode} language="javascript" />
        </ExpandableCodeWrapper>
        <ToggleButton onClick={() => setSnakeCodeExpanded(!snakeCodeExpanded)}>
             {snakeCodeExpanded ? 'Show Less' : 'Show More'}
        </ToggleButton>
        <GameScreenshot src={snakeGamePng} alt="Snake Game Screenshot" />
      </Section>

      {/* Add more sections for different game dev topics */}
    </PageContainer>
  );
};

export default GameDev; 
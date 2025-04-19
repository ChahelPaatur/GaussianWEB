import React from 'react';
import styled from 'styled-components';
import CodeBlock from 'components/CodeBlock'; // Adjust path if needed

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

const TestScripts = () => {
  const assertHelperCode = `
// Helper function for assertions (implement or use built-in if available)
function assert(condition, message) {
  if (!condition) {
    print message;
    // In a real test runner, you might throw an error or exit
    // For now, just print the failure message
  }
}
  `.trim();

  // New Example 3: Basics
  const exampleCode3 = `
// File: test_basics.gas

// --- Basic Variables & Ops ---
print "--- Basics ---"
var a = 10
val b = 20.5
var temp = a + b // Changed plc to var for compatibility
print "a+b = " + temp 

a = temp * 2
print "new a = " + a 

val immutableTest = "I cannot change"
// immutableTest = "Try me" // This should cause a runtime error if uncommented

// --- Control Flow ---
print "\n--- Control Flow ---"
if (a > 50) {
  print "a is large"
} else {
  print "a is small"
} 

var counter = 0
while (counter < 3) {
  print "while: " + counter
  counter = counter + 1
}

print "For loop:"
for (var i = 0; i < 3; i = i + 1) {
  print "for: " + i
}

print "Each loop (string):"
each (char in "GAS") {
  print "each char: " + char
}

// Array literals/iteration not yet supported
// var list = [10, 20, 30]
// each (item in list) {
//  print "each item: " + item
// }

print "Match statement:"
val testVal = "B"
match (testVal) {
  case "A": print "Matched A"
  case "B", "C": print "Matched B or C" 
  default: print "Matched default"
}

// --- Optional Semicolons ---
print "--- Optional Semicolons ---"
var x = 100
var y = 200
print x + y 

// --- Done ---
print "--- Basic tests complete ---"
  `.trim();

  const expectedOutput3 = `
--- Basics ---
a+b = 30.5
new a = 61

--- Control Flow ---
a is large
while: 0
while: 1
while: 2
For loop:
for: 0
for: 1
for: 2
Each loop (string):
each char: G
each char: A
each char: S
Match statement:
Matched B or C
--- Optional Semicolons ---
300
--- Basic tests complete ---
  `.trim();

  // New Example 4: Functions & Classes
  const exampleCode4 = `
// File: test_functions.gas

print "--- Functions & Closures ---"

function makeAdder(addAmount) {
  function adder(x) {
    return x + addAmount // Uses addAmount from enclosing scope (closure)
  }
  return adder
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

print "add5(3) = " + add5(3)   
print "add10(3) = " + add10(3) 

function fib(n) {
  if (n <= 1) return n
  return fib(n - 2) + fib(n - 1)
}

print "fib(7) = " + fib(7) 

print "\n--- Classes & Methods ---"

class Vehicle {
  function init(name) {
    this.name = name
    print "Vehicle init: " + this.name
  }

  function describe() {
    return "Vehicle: " + this.name
  }
}

class Car extends Vehicle {
  function init(name, model) {
    super.init(name) // Call superclass initializer
    this.model = model
    print "Car init: " + this.model
  }

  function describe() {
    // Call superclass method and add to it
    return super.describe() + ", Model: " + this.model
  }

  function drive() {
    print this.name + " (" + this.model + ") driving..."
  }
}

var basic = Vehicle("Basic Transport")
print basic.describe()

var myCar = Car("MyCivic", "Honda Civic")
print myCar.describe()
myCar.drive()

print "\n--- Function/Class tests complete ---"
  `.trim();

  const expectedOutput4 = `
--- Functions & Closures ---
add5(3) = 8
add10(3) = 13
fib(7) = 13

--- Classes & Methods ---
Vehicle init: Basic Transport
Vehicle: Basic Transport
Vehicle init: MyCivic
Car init: Honda Civic
Vehicle: MyCivic, Model: Honda Civic
MyCivic (Honda Civic) driving...

--- Function/Class tests complete ---
  `.trim();

  return (
    <PageContainer>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Test Script Examples</h2>
      <Description>
        Examples of how to write simple test scripts in Gaussian to verify functionality.
      </Description>

      <Section>
        <Heading>Example 1: Assertion Helper</Heading>
        <Description>
          A simple helper function for assertions. Gaussian might include a built-in testing module in the future.
        </Description>
        <CodeBlock code={assertHelperCode} language="javascript" />
      </Section>

      <Section>
        <Heading>Example 2: Comprehensive Basics Test</Heading>
        <Description>
          Testing various basic language features including variable types (<code className="code-inline">var</code>, <code className="code-inline">val</code>), operators, control flow (<code className="code-inline">if</code>, <code className="code-inline">while</code>, <code className="code-inline">for</code>, <code className="code-inline">each</code> for strings, <code className="code-inline">match</code>), and optional semicolons.
        </Description>
        <CodeBlock code={exampleCode3} language="javascript" />
        <Description><strong>Expected Output:</strong></Description>
        <CodeBlock code={expectedOutput3} language="plaintext" />
      </Section>
      
      <Section>
        <Heading>Example 3: Functions, Closures & Classes Test</Heading>
        <Description>
          Testing function definition, closures (functions capturing their environment), recursion (<code className="code-inline">fib</code>), class definition, inheritance (<code className="code-inline">extends</code>), initializers (<code className="code-inline">init</code>), calling superclass methods (<code className="code-inline">super</code>), and method calls.
        </Description>
        <CodeBlock code={exampleCode4} language="javascript" />
        <Description><strong>Expected Output:</strong></Description>
        <CodeBlock code={expectedOutput4} language="plaintext" />
      </Section>

    </PageContainer>
  );
};

export default TestScripts; 
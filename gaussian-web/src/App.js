import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import './styles/global.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Commented out background components
// import VantaBackground from './components/VantaBackground';
// import ParticleBackground from './components/ParticleBackground';
import LoadingIndicator from './components/LoadingIndicator';
import DocumentationLayout from './components/DocumentationLayout'; // Import layout
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import LoadingScreen from './components/LoadingScreen'; // Import the new loading screen

// Pages (Lazy loaded)
const Home = lazy(() => import('./pages/Home'));
const DocumentationHome = lazy(() => import('./pages/Documentation'));
const Download = lazy(() => import('./pages/Download'));
const About = lazy(() => import('./pages/About'));
const Donations = lazy(() => import('./pages/Donations'));
const DownloadThankYou = lazy(() => import('./pages/DownloadThankYou'));

// --- Lazy Load Documentation Sub-Pages ---
const SyntaxOverview = lazy(() => import('./pages/docs/language-reference/SyntaxOverview'));
const VariablesTypes = lazy(() => import('./pages/docs/language-reference/VariablesTypes'));
const ControlFlow = lazy(() => import('./pages/docs/language-reference/ControlFlow'));
const Functions = lazy(() => import('./pages/docs/language-reference/Functions'));
const ClassesObjects = lazy(() => import('./pages/docs/language-reference/ClassesObjects'));
const States = lazy(() => import('./pages/docs/language-reference/States'));
const NativeFunctions = lazy(() => import('./pages/docs/built-in/NativeFunctions'));
const Modules = lazy(() => import('./pages/docs/built-in/Modules'));
const AIIntegration = lazy(() => import('./pages/docs/built-in/AIIntegration'));
const GameDev = lazy(() => import('./pages/docs/examples/GameDev'));
const TestScripts = lazy(() => import('./pages/docs/examples/TestScripts'));
// --- End Lazy Load Documentation Sub-Pages ---

const AppRoutes = () => {
  const location = useLocation();
  // Removed unused state related to previous loading indicator logic
  // const [isLoading, setIsLoading] = useState(false);
  // const [prevLocation, setPrevLocation] = useState('');

  return (
    <>
      {/* { isHomePage ? <VantaBackground /> : <ParticleBackground />} */}
      <Navbar />
      {/* {isLoading && <LoadingIndicator />} */}
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* --- Documentation Routes --- */}
          <Route path="/docs" element={<DocumentationLayout />}>
            <Route index element={<DocumentationHome />} /> 
            {/* <Route path="getting-started" element={<InstallationSetup />} /> */}{/* Commented out */}
            {/* <Route path="hello-world" element={<HelloWorld />} /> */}{/* Commented out */}
            <Route path="language-reference/syntax" element={<SyntaxOverview />} />
            <Route path="language-reference/variables" element={<VariablesTypes />} />
            <Route path="language-reference/control-flow" element={<ControlFlow />} />
            <Route path="language-reference/functions" element={<Functions />} />
            <Route path="language-reference/classes" element={<ClassesObjects />} />
            <Route path="language-reference/states" element={<States />} />
            <Route path="built-in/functions" element={<NativeFunctions />} />
            <Route path="built-in/modules" element={<Modules />} />
            <Route path="built-in/ai" element={<AIIntegration />} />
            {/* <Route path="examples/game" element={<SimpleGame />} /> */}{/* Commented out */}
            {/* <Route path="examples/ai-npc" element={<AiNpc />} /> */}{/* Commented out */}
            {/* --- Add New Doc Example Routes --- */}
            <Route path="examples/game-dev" element={<GameDev />} />
            <Route path="examples/test-scripts" element={<TestScripts />} />
            {/* --- End New Doc Example Routes --- */}
          </Route>
          {/* --- End Documentation Routes --- */}

          <Route path="/download" element={<Download />} />
          {/* --- Add New Route for Thank You Page --- */}
          <Route path="/download/thank-you" element={<DownloadThankYou />} />
          {/* --- End New Route --- */}
          <Route path="/about" element={<About />} /> 
          <Route path="/donations" element={<Donations />} /> 
          {/* --- End New Routes --- */}
          
          {/* Fallback or 404 route could go here */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    // The LoadingScreen component itself handles the initial 2-second delay
    // and then calls the onLoaded function after its animation starts.
    // The onLoaded function here will set isLoading to false.
    // If LoadingScreen didn't have its own timer/callback, you'd use setTimeout here.
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen onLoaded={handleLoadingComplete} />
      ) : (
        <>
          <ScrollToTop />
          <AppRoutes />
          <Analytics />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

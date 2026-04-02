import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

console.log("Studio Lens AI: Initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Studio Lens AI: Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  );
  console.log("Studio Lens AI: Rendered successfully");
} catch (error) {
  console.error("Studio Lens AI: Failed to render app", error);
}
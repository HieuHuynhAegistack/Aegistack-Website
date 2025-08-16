import React from 'react';
import { HomePage } from './pages/HomePage';

function App() {
  // Simple routing based on hash
  const currentPath = window.location.hash.slice(1) || '/';
  
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/pricing':
        const { PricingPage } = require('./pages/PricingPage');
        return <PricingPage />;
      case '/help':
        const { HelpPage } = require('./pages/HelpPage');
        return <HelpPage />;
      case '/privacy':
        const { PrivacyPage } = require('./pages/PrivacyPage');
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  );
}

export default App;

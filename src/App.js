import React from 'react';
import Header from './Header';  // Adjust the path as per your project structure
import Footer from './Footer';  // Adjust the path as per your project structure
import HeroSection from './HeroSection';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      {/* You can add your main app content or other components here */}
      <Footer />
    </div>
  );
}

export default App;


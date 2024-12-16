import React, { useState, useEffect } from 'react';
import LiveRenderer from './components/LiveRenderer';
import './styles/LiveRenderer.css';
import './styles/GlobalStyles.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="App" style={{ 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: 'var(--background-color)',
      color: 'var(--text-color)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 20px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <h1 style={{ 
          margin: '2px 0',
          color: 'var(--heading-color)',
          fontSize: 'clamp(20px, 4vw, 28px)',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          InstantCraft
        </h1>
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={isLightMode}
            onChange={toggleMode}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <LiveRenderer />
    </div>
  );
}

export default App;
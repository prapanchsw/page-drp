import React, { useState } from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {
  const [mode, setMode] = useState('view'); 

  const handleToggleMode = () => {
    setMode((prevMode) => (prevMode === 'view' ? 'edit' : 'view'));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h3>PAGE BUILDER APP 2.0</h3>
      </header>
      <main>
        <Canvas mode={mode} />
      </main>
    </div>
  );
}

export default App;

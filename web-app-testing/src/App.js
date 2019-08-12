import React from 'react';
import './App.css';
import Display from './components/Display';
import Controls from './components/Controls'

function App() {
  return (
    <div className="App">
      <Display strikes={2} balls={3} />
      <Controls stike={() => console.log('strike')} />
    </div>
  );
}

export default App;

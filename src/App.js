// src/App.js
import React from 'react';
import './App.css';
import Button from './button';
import RouteRecommendation from './flight';
import  Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <RouteRecommendation />
        
        <Sidebar/>
      
<div className="btn">
        <Button />
        </div>
 
      </main>
      </header>
      
    </div>
  );
}

export default App;
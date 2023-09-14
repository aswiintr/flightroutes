// src/App.js
import React from 'react';
import './App.css';
import Button from './button';
import RouteRecommendation from './flight';
import  Sidebar from './sidebar';
import AirlinesList from './filter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <RouteRecommendation />
        
        <Sidebar/>
      
<AirlinesList/>
        <Button />
 
      </main>
      </header>
      
    </div>
  );
}

export default App;
import React from 'react';

import './App.css';
import Headerleft from './components/header/header';

function App() {
  // BEM naming convention App to app classname
  return (
    <div className="app"> 
   
     <Headerleft/>
    </div>
  );
}

export default App;

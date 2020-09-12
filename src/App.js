import React from 'react';

import './App.css';
import Feed from './components/feed/feed';
import Headerleft from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  // BEM naming convention App to app classname
  return (
    <div className="app"> 
   
     <Headerleft/>
     <div className="app__body">
     <Sidebar/>
     <Feed/>
     </div>
    </div>
    
  );
}

export default App;

import React from 'react';

import './App.css';
import Feed from './components/feed/feed';
import Headerleft from './components/header/header';
// import Login from './components/login/Login';

import Sidebar from './components/sidebar/sidebar';
import Widget from './components/widget/Widget';

function App() {
  // BEM naming convention App to app classname
  const user = "sharan";
  return (
    <div className="app"> 
    
     <div>
     <Headerleft/>
     <div className="app__body">
     <Sidebar/>
     <Feed/>
     <Widget/>
     </div>
    </div>
    </div>
     
    
  );
}

export default App;

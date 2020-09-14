import React from 'react';

import './App.css';
import Feed from './components/feed/feed';
import Headerleft from './components/header/header';
import Login from './components/login/Login';
// import Login from './components/login/Login';

import Sidebar from './components/sidebar/sidebar';
import Widget from './components/widget/Widget';
import { useStateValue } from './StateProvider';

function App() {
  // BEM naming convention App to app classname

  const [{user},dispatch] = useStateValue();
  return (
    <div className="app"> 
      {!user ? (
        <Login/> 
       ) : (
     <div>
     <Headerleft/>
     <div className="app__body">
     <Sidebar/>
     <Feed/>
     <Widget/>
     </div>
    </div>
    
       )}
  </div>
     
    
  );
}

export default App;

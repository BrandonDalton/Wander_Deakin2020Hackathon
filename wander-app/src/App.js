import React from 'react';
import './App.scss';
import Countdown from 'react-countdown-now';
import  Timer from './Timer';
import Goal from './Goal';
function App() {
  return (
   <div className="homePage--container">
          Home Page
     <div className="homePage--menu">
       Menu
     </div>
     <Timer/>
     <Goal/>
   </div> 
  )
}

export default App;

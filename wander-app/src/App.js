import React from 'react';
import './App.scss';
import Countdown from 'react-countdown-now';
import  Timer from './Timer';
import Goal from './Goal';
function App() {

  let API_Key = "AIzaSyBzhUgLr6qbOXkkhJZ8WFwtGI6Il0GS_J0";

  // const script = document.createElement("script");

  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${API_Key}&libraries=places`;
  //   script.async = true;

  //   document.body.appendChild(script);
  //   console.log(fetch())
    

  return (
   <div className="homePage--container">
     <div className="homePage--menu">
       Menu Placeholder
     </div>
     <Timer/>
     <Goal/>
   </div> 
  )
}

export default App;

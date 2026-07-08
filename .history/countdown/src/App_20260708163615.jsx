import "./App.css";
import NewYear from "./assets/newyear.jpg";
import useCountdown from "./hooks/useCountdown";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

function App() {

  const {event} = useContext(CountdownContext)

  let eventImage = null;
  
  If (event) eventImage = event.image
  
  return (
    <div className="app" style={eventImage ? (backgroundImage :  ()}>
      <div className="container">
        <Outlet/>
        </div>
        
      </div>
  );
}

export default App;

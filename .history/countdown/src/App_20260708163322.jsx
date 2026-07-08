import "./App.css";
import NewYear from "./assets/newyear.jpg";
import useCountdown from "./hooks/useCountdown";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
IMPO

function App() {
  
  return (
    <div className="app" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet/>
        </div>
        
      </div>
  );
}

export default App;

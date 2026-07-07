import "./App.css";
import NewYear from "./assets/newyear.jpg";
import useCountdown from "./hooks/useCountdown";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="app" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        </div>
        <Outlet/>
      </div>
  );
}

export default App;

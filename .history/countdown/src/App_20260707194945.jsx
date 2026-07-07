import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import NewYear from "./assets/newyear.jpg";
import useCountdown from "./hooks/useCountdown";
import { Outlet } from "react-router-dom";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2027 00:00:00");
  return (
    <div className="app" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;

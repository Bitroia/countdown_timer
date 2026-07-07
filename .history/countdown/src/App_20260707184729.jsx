import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import  NewYear from "./assets/n"


function App() {
  return <div className="app">
    <div className="container">
      <Title title="Contagem regressiva para 2027"/>
      <div className="countdown-container">
        <Counter title="Dias" number={2}/>
        <Counter title="Horas" number={2}/>
        <Counter title="Minutos" number={2}/>
        <Counter title="Segundos" number={2}/>
      </div>
    </div>
  </div>;
}

export default App;

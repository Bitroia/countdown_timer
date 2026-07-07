import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";


function App() {
  return <div className="app">
    <div className="container">
      <Title title="Contagem regressiva para 2027"/>
      <div className="countdown-container">
        <Counter title="Dias" {number}/>
      </div>
    </div>
  </div>;
}

export default App;

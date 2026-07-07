import React from "react";
import Title from "./component"

const Countdown = () => {
  return (
    <>
      <Title title="Contagem regressiva para 2027" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;

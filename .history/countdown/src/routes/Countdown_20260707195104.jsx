import React from 'react'

const Countdown = () => {
  return (
    <div></div><Title title="Contagem regressiva para 2027" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
  )
}

export default Countdown
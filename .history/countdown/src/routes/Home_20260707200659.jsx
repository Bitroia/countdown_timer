import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
          />
        </label>

        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder=Digite o título do evento"
          />
        </label>

        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
          />
        </label>
      </form>
    </div>
  );
};

export default Home;

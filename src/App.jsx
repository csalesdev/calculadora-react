import "./app.scss";
import "./global.scss";

import { useState } from "react";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturarPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      <p>by Cauã Sales</p>
      <div className="div1">
        <input
          type="text"
          placeholder="Digite um número"
          onChange={capturarPrimeiroValor}
        />
        <input
          type="text"
          placeholder="Digite um número"
          onChange={capturarSegundoValor}
        />
      </div>
      <div className="div2">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
      </div>
      <h2>{resultado}</h2>
    </main>
  );
}

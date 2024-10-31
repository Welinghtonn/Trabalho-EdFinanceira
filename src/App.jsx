import React, { useState } from "react";

function App() {
  const [valueM, setValueM] = useState()
  const [valueJ, setValueJ] = useState()
  const [valueP, setValueP] = useState()
  const [totalJuros, setTotalJuros] = useState()
  const [data, setData] = useState(null)

  const NMeses = (e) => {
    setValueM(e)
  }

  const TaxaJuros = (e) => {
    setValueJ((e) / 100)
  }

  const ValorPrestacao = (e) => {
    setValueP(e)
  }

  function calcular(){
    const totalParcela = (valueM * valueJ) / (1 - Math.pow(1 + valueJ, -valueM))
    setData(totalParcela.toFixed(2))
    const totalJuros = totalParcela * valueM
    setTotalJuros(totalJuros.toFixed(2))
  }

  return (
    <div className="App">
      <header><h3>Calculadora de Financiamento</h3></header>

      <div className="card">
        <div className="infos"><p>N° de meses:</p><input value={valueM}  style={{ color: "#fff" }}  onChange={(e) => NMeses(parseInt(e.target.value))} type="number" /></div>
        <div className="infos"><p>Taxa de juros mensal:</p><input  style={{ color: "#fff" }} value={valueJ} onChange={(e) => TaxaJuros(parseInt(e.target.value))} type="number" /></div>
        <div className="infos"><p>Valor da prestação:</p><input  style={{ color: "#fff" }} value={valueP} onChange={(e) => ValorPrestacao(parseInt(e.target.value))} type="number" /></div>
        <button onClick={calcular}>Calcular</button>
        <div className="relative">
          <div className="infos"><p>Valor financiado:</p><p>Total Parcela: {data} Total Juros: {totalJuros}</p><div class="for-disabled"></div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

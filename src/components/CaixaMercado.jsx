import { useState } from 'react'
import './CaixaMercado.css'

// componente do caixa do mercado
// pega 2 valores e mostra soma, subtracao, multiplicacao e divisao
function CaixaMercado() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState('')

  function calcular() {
    const num1 = Number(valor1)
    const num2 = Number(valor2)

    // se nao for numero, avisa e para
    if (isNaN(num1) || isNaN(num2)) {
      setErro('Preencha os dois campos com numeros validos')
      setResultado(null)
      return
    }

    setErro('')
    setResultado({
      soma: num1 + num2,
      subtracao: num1 - num2,
      multiplicacao: num1 * num2,
      divisao: num2 !== 0 ? (num1 / num2).toFixed(2) : 'nao e possivel dividir por 0',
    })
  }

  return (
    <div className="container">
      <h1>Caixa de Mercado</h1>

      <div className="inputs">
        <input
          type="number"
          placeholder="Valor 1"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor 2"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
        />
      </div>

      <button onClick={calcular}>Calcular</button>

      {erro && <p className="erro">{erro}</p>}

      {resultado && (
        <div className="resultado">
          <p>Soma: {resultado.soma}</p>
          <p>Subtracao: {resultado.subtracao}</p>
          <p>Multiplicacao: {resultado.multiplicacao}</p>
          <p>Divisao: {resultado.divisao}</p>
        </div>
      )}
    </div>
  )
}

export default CaixaMercado

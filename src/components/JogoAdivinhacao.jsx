import { useState } from 'react'
import './JogoAdivinhacao.css'

// gera um numero aleatorio entre 1 e 100
function gerarNumero() {
  return Math.floor(Math.random() * 100) + 1
}

function JogoAdivinhacao() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumero())
  const [palpite, setPalpite] = useState('')
  const [mensagem, setMensagem] = useState('Tente adivinhar o numero entre 1 e 100')
  const [tentativas, setTentativas] = useState(0)
  const [acertou, setAcertou] = useState(false)

  function tentar() {
    const numero = Number(palpite)

    if (palpite === '' || isNaN(numero)) {
      setMensagem('Digite um numero valido')
      return
    }

    setTentativas(tentativas + 1)

    if (numero === numeroSecreto) {
      setMensagem('Acertou! O numero era ' + numeroSecreto)
      setAcertou(true)
    } else if (numero > numeroSecreto) {
      setMensagem('Muito alto, tente de novo')
    } else {
      setMensagem('Muito baixo, tente de novo')
    }
  }

  function jogarDeNovo() {
    setNumeroSecreto(gerarNumero())
    setPalpite('')
    setMensagem('Tente adivinhar o numero entre 1 e 100')
    setTentativas(0)
    setAcertou(false)
  }

  return (
    <div className="container">
      <h1>Jogo de Adivinhacao</h1>
      <p>{mensagem}</p>

      {!acertou && (
        <div className="inputs">
          <input
            type="number"
            placeholder="Seu palpite"
            value={palpite}
            onChange={(e) => setPalpite(e.target.value)}
          />
          <button onClick={tentar}>Tentar</button>
        </div>
      )}

      <p className="tentativas">Tentativas: {tentativas}</p>

      {acertou && <button onClick={jogarDeNovo}>Jogar de novo</button>}
    </div>
  )
}

export default JogoAdivinhacao

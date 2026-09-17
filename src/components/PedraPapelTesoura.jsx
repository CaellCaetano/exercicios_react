import { useState } from 'react'
import './PedraPapelTesoura.css'

const opcoes = ['Pedra', 'Papel', 'Tesoura']

// escolhe uma opcao aleatoria pro computador
function jogadaDoComputador() {
  const indice = Math.floor(Math.random() * opcoes.length)
  return opcoes[indice]
}

// decide quem ganhou
function quemGanhou(jogador, computador) {
  if (jogador === computador) return 'empate'

  if (
    (jogador === 'Pedra' && computador === 'Tesoura') ||
    (jogador === 'Papel' && computador === 'Pedra') ||
    (jogador === 'Tesoura' && computador === 'Papel')
  ) {
    return 'jogador'
  }

  return 'computador'
}

function PedraPapelTesoura() {
  const [minhaJogada, setMinhaJogada] = useState(null)
  const [jogadaPC, setJogadaPC] = useState(null)
  const [resultado, setResultado] = useState('Escolha uma opcao')
  const [pontosJogador, setPontosJogador] = useState(0)
  const [pontosComputador, setPontosComputador] = useState(0)
  const [empates, setEmpates] = useState(0)

  function jogar(opcao) {
    const jogadaComputador = jogadaDoComputador()
    const vencedor = quemGanhou(opcao, jogadaComputador)

    setMinhaJogada(opcao)
    setJogadaPC(jogadaComputador)

    if (vencedor === 'empate') {
      setResultado('Empate!')
      setEmpates(empates + 1)
    } else if (vencedor === 'jogador') {
      setResultado('Voce ganhou!')
      setPontosJogador(pontosJogador + 1)
    } else {
      setResultado('O computador ganhou!')
      setPontosComputador(pontosComputador + 1)
    }
  }

  return (
    <div className="container">
      <h1>Pedra, Papel e Tesoura</h1>

      <div className="opcoes">
        {opcoes.map((opcao) => (
          <button key={opcao} onClick={() => jogar(opcao)}>
            {opcao}
          </button>
        ))}
      </div>

      {minhaJogada && (
        <p>Voce: {minhaJogada} | Computador: {jogadaPC}</p>
      )}

      <p className="resultado">{resultado}</p>

      <div className="placar">
        <span>Voce: {pontosJogador}</span>
        <span>Empates: {empates}</span>
        <span>Computador: {pontosComputador}</span>
      </div>
    </div>
  )
}

export default PedraPapelTesoura

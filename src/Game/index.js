import React from 'react'

import useLocalStorageState from './../hooks/useLocalStorageState'
import Board from './../Game/components/Board'
import { calculateWinner, calculateNextValue, calculateStatus } from './../Game/components/utils'


const Game = () => {
    const [history, setHistory] = useLocalStorageState('tic-tac-toe:history', [
        Array(9).fill(null),
    ])
    const [currentStep, setCurrentStep] = useLocalStorageState(
        'tic-tac-toe:step',
        0,
    )

    const currentSquares = history[currentStep]
    const winner = calculateWinner(currentSquares)
    const nextValue = calculateNextValue(currentSquares)
    const status = calculateStatus(winner, currentSquares, nextValue)

    function selectSquare(square) {
        if (winner || currentSquares[square]) {
            return
        }

        const newHistory = history.slice(0, currentStep + 1)
        const squares = [...currentSquares]

        squares[square] = nextValue
        setHistory([...newHistory, squares])
        setCurrentStep(newHistory.length)
    }

    function restart() {
        setHistory([Array(9).fill(null)])
        setCurrentStep(0)
    }

    const moves = history.map((stepSqares, step) => {
        const desc = step ? `Go to move #${step}` : 'Go to game start'
        const isCurrentStep = step === currentStep
        return (
            <li key={step}>
                <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)} >
                    {desc} {isCurrentStep ? '(current)' : null}
                </button>
            </li>
        )
    })

    return (
        <div className="" style={{}}>
            <div>
                <div>
                    <Board onClick={selectSquare} squares={currentSquares} />
                    <button onClick={restart}>
                        Restart
                    </button>
                </div>
                <div>
                    <h1>{status}</h1>
                    <div>{moves}</div>
                </div>
            </div>
        </div>
    )
}

export default Game

import React from 'react'

import useLocalStorageState from './../hooks/useLocalStorageState'
import Board from './../Game/components/Board'
import { calculateWinner, calculateNextValue, calculateStatus } from './../Game/components/utils'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
                <Button variant="outline-primary" size="lg" disabled={isCurrentStep} onClick={() => setCurrentStep(step)} >
                    {desc} {isCurrentStep ? '(current)' : null}
                </Button>
            </li>
        )
    })

    return (
        <Container className="overflow-auto" style={{ paddingTop: "20px" }}>
            <Row>
                <Col md={6} sm={12}>
                    <Board onClick={selectSquare} squares={currentSquares} />
                    <Button variant="primary" size="lg" onClick={restart} style={{ marginTop: "1rem" }}>
                        Restart
                    </Button>
                </Col>
                <Col md={6} sm={12} className="text-start">
                    <h1>{status}</h1>
                    <div>{moves}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Game

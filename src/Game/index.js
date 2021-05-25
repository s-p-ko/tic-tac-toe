import React from 'react'

import useLocalStorageState from './../hooks/useLocalStorageState'
import Board from './../Game/components/Board'
import { calculateWinner, calculateNextValue, calculateStatus } from './../Game/components/utils'


const Game = () => {
    const [history, setHistory] = useLocalStorageState('tic-tac-toe:history', [ ])
    const [currentStep, setCurrentStep] = useLocalStorageState(
        'tic-tac-toe:step',
        0,
    )
 

    function selectSquare() {
       
    }

    function restart() {
        
    }

    const moves = ()=>{}

    return (
        //Board & movies
    )
}

export default Game

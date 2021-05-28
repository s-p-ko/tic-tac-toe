export const calculateStatus = (winner, squares, nextValue) => {
    return winner
        ? `Winner: ${winner}`
        : squares.every(Boolean)
            ? `GAME OVER. Tie!`
            : `Next player: ${nextValue}`
}

export const calculateNextValue = (squares) => {
    const xSquaresCount = squares.filter(r => r === 'X').length
    const oSquaresCount = squares.filter(r => r === 'O').length
    return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

export const calculateWinner = () => {

    // return winner or  null
}

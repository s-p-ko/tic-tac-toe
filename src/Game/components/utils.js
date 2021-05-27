export const calculateStatus = (winner, squares, nextValue) => {
    return winner
        ? `Winner: ${winner}`
        : squares.every(Boolean)
            ? `GAME OVER. Tie!`
            : `Next player: ${nextValue}`
}

export const calculateNextValue = () => {

    // return  'X' or 'O'
}

export const calculateWinner = () => {

    // return winner or  null
}

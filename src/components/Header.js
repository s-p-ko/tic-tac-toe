import React from 'react'


import logo from './../logo.svg'

const Header = () => {
    return (
        <nav>
            <div>
                <a href="https://github.com/s-p-ko/" target="_blank" rel="noreferrer">GitHub repository</a>
                <div>Tic Tac Toe</div>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={logo} className="d-inline-block align-text-top" width="50" height="50" alt="logo" /></a>
            </div>
        </nav>
    )
}

export default Header
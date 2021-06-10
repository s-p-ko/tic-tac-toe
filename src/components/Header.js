import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from './../logo.svg'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="https://github.com/s-p-ko/tic-tac-toe" target="_blank" rel="noreferrer">GitHub repository</Navbar.Brand>
                <Navbar.Brand>Tic Tac Toe</Navbar.Brand>
                <Navbar.Brand href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={logo} className="d-inline-block align-text-top" width="50" height="50" alt="logo" /></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header

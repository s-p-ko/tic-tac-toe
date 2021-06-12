import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="d-none d-lg-block d-md-block"
            style={{
                backgroundColor: "#f8f9fa",
                marginTop: "3rem",
                padding: "1rem 0",
                position: "absolute",
                bottom: "0px",
                width: "100%"
            }}
        >
            <Container>
                <Row>
                    <Col md={6} className="text-start"><a href="https://github.com/s-p-ko/tic-tac-toe"><b>s-p-ko</b></a></Col>
                    <Col md={6} className="text-end">Logo© {year}</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

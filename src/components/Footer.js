import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className=""
            style={{}}
        >
            <div>
                <div>
                    <div><a href="https://github.com/s-p-ko/"><b>s-p-ko</b></a></div>
                    <div>Logo© {year}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

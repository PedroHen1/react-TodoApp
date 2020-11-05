import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#151515',
    color: 'whitesmoke',
    textAlign: 'center',
    padding: '20px 0px'
}

export default Header;
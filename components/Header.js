/*
    components/Header.js
*/

// IMPORTS
import Link from 'next/link'

// STYLES

const containerStyle = {
    padding: 10,
    margin: '0 auto',
    width: '66%',
    borderBottom: '1px solid #ABABAB'
}

const linkStyle = {
    marginTop: 4,
    marginRight: '2em',
    marginLeft: '2em',
    padding: 4,
    paddingLeft: 32,
    paddingRight: 32,
}

// Header component
const Header = () => (
    <div style={containerStyle}>
        <Link href="/">
            <button style={linkStyle}>HOME</button>
        </Link>
        <Link href="/about">
            <button style={linkStyle}>ABOUT</button>
        </Link>
    </div>
)

export default Header

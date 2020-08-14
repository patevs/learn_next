/*
    components/Header.js
*/

// IMPORTS
import Link from 'next/link'

// STYLES

const containerStyle = {
    padding: 10,
    margin: '0 auto',
    width: '35%',
    border: '1px solid #ABABAB'
}

const linkStyle = {
    marginRight: 16,
    marginLeft: 16,
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16
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

/*
    components/MyLayout.js
*/

// IMPORTS
import Header from './Header'

// STYLES
const layoutStyle = {
    padding: 20,
    margin: '2em auto',
    width: '50%',
    textAlign: 'center',
    border: '1px solid #DDD'
}

// Layout component
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout

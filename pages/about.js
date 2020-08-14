/*
    pages/about.js
*/

// IMPORTS

// layout component
import Layout from '../components/MyLayout'
import Divider from '../components/Divider'

// STYLES
const titleStyle = {
    marginTop: 40
}

// About page component
export default () => (
    <Layout>
        <h2 style={titleStyle}>ABOUT PAGE</h2>
        <Divider />
        <p>---- ABOUT PAGE CONTENT ----</p>
    </Layout>
)

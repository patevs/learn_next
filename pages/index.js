/*
    pages/index.js
*/

// IMPORTS

import Layout from '../components/MyLayout'
import Divider from '../components/Divider'

// remove comment to test eslint identifies unused import
//import Blank from './'

// STYLES
const titleStyle = {
    marginTop: 40
}

// Index (Home page) component
export default () => (
    <Layout>
        <h2 style={titleStyle}>HOME PAGE</h2>
        <Divider />
        <p>Next.js framework linting test using ESLint</p>
        <p>---- HOME PAGE CONTENT ----</p>
    </Layout>
)

// EOF

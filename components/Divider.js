/*
    components/Divider.js
*/

// STYLES
const dividerStyle = {
    padding: 5,
    margin: '0 auto',
    width: '50%'
}

const colorStyle = {
    color: '#4CAF50'
}

// Divider component
const Divider = () => (
    <div style={dividerStyle}>
        <hr style={colorStyle} />
    </div>
)

export default Divider

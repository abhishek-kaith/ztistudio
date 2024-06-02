import React from 'react'

function Footer() {
    const data = new Date()
    return <div>Footer {data.toLocaleDateString()}</div>
}

export default Footer

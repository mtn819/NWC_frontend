import React from 'react'
import './Dog.css'

function Dog() {
  const dogStyle = {
    backgroundColor: "var(--colorRed)",
    border: "2px solid black"
  }

  return (
    <div style={dogStyle}>
      I am a dog
    </div>
  )
}

export default Dog

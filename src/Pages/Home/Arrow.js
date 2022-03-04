import React from 'react'

function Arrow({direction, color}) {
  return (
    <div style={{
      color: color,
      backgroundColor: "#FAFAFA",
      width: "calc(50*var(--xUnit))",
      height: "calc(50*var(--xUnit)",
      borderRadius: "calc(999*var(--xUnit)",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      border: "calc(2*var(--xUnit)) solid #F1F9FF",
    }}>
      {direction === "right" ? <>&#x2192;</> : <>&#x2190;</>}
    </div>
  )
}

export default Arrow

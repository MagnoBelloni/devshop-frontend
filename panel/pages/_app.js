import React, { Component } from 'react'
import '../css/styles.css'

const App = ({ Component, pagePros }) => {
  return (
    <div>
      <Component {...pagePros} />
    </div>
  )
}

export default App

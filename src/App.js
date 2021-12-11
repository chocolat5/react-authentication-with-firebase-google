import React, { useState } from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from './components/Form'
import Dashboad from './components/Dashboard'

const App = () => {
  return (
    <Router>
      <div className="app">
        <main css={main}>
          <div css={container}>
            <h1>Firabase Authentication with google</h1>
            <Routes>
              <Route exact path="/" element={<Dashboad />} />
              <Route path="/login" element={<Form />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

const main = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const container = css`
  max-width: 400px;

  h1 {
    margin-bottom: 24px;
    font-size: 1.6rem;
    font-weight: bold;
  }
`

export default App

import React, { useState } from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'

import Form from './components/Form'
import Dashboad from './components/Dashboard'

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState('')

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <main css={main}>
            <div css={container}>
              <Routes>
                <Route exact path="/" element={<Dashboad />} />
                <Route
                  path="/login"
                  element={
                    <Form />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </AuthProvider>
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
    font-size: 3.2rem;
    font-weight: bold;
    letter-spacing: .05em;
    text-align: center;
  }
`

export default App

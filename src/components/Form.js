import React, { useState } from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
import BasicButton from './Button'
import logo from '../assets/img/logo_google.svg'
import logoWh from '../assets/img/logo_google_white.svg'

const Form = () => {
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleAction() {
    try {
      await signup()
      navigate('/')
    } catch {
      setError('Failed to log in')
    }
  }

  return (
    <div css={container}>
      <h1>Hello!</h1>
      {error && <div css={alert}>{error}</div>}
      <BasicButton
        style="secondary"
        logo={logoWh}
        alt="Google"
        title="Log in with Google"
        handleAction={() => handleAction()}
      />
      <p>Don't have an account?</p>
      <BasicButton
        style="primary"
        logo={logo}
        alt="Google"
        title="Sign up with Google"
        handleAction={() => handleAction()}
      />
    </div>
  )
}

const alert = css`
  margin-bottom: 16px;
  padding: 8px;
  color: red;
  background-color: rgba(255, 0, 0, 0.1);
  font-weight: bold;
  text-align: center;
`

const container = css`
  text-align: center;

  p {
    margin: 32px 0 12px;
    padding-top: 32px;
    border-top: 1px solid #ccc;

    &:before {
    }
  }
`

export default Form

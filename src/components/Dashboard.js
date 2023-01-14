import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import 'firebase/compat/auth'

import { useAuth } from '../contexts/AuthContext'
import BasicButton from './Button'

const Dashboard = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleAction() {
    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <div css={inner}>
      <h1>Hi {currentUser}</h1>
      <p>You successed to log in</p>
      <BasicButton
        style="secondary"
        title="Log out"
        handleAction={() => handleAction()}
      />
    </div>
  )
}

const inner = css`
  margin-bottom: 40px;

  p {
    margin-bottom: 24px;
  }

  strong {
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: .04em;
  }
`

export default Dashboard

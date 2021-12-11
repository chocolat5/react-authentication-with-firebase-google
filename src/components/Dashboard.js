import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { signOut, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'

import BasicButton from './Button'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleAction = () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error('Failed to log out')
      })
  }

  return (
    <>
      <div css={inner}>
        <h2>Profile</h2>
        <p>
          <strong>Email: </strong>
        </p>
      </div>
      <BasicButton title="Log out" handleAction={() => handleAction(1)} />
    </>
  )
}

const inner = css``

export default Dashboard

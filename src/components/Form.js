import React, { useState } from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'

import BasicButton from './Button'

const Form = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleAction = (id) => {
    // instance
    const provider = new GoogleAuthProvider()

    // login with popup
    if (id === 1) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user)
          navigate('/')
        })
        .catch((error) => {
          console.error(error.message)
        })
    }
  }

  return (
    <div css={container}>
      <h2>Sign up</h2>
      {error && <div css={alert}>{error}</div>}
      <BasicButton
        title="Sign up with Google"
        handleAction={() => handleAction(1)}
      />
      <p>Already have an account?</p>
      <BasicButton
        title="Log in with Google"
        handleAction={() => handleAction(1)}
      />
    </div>
  )
}

const alert = css`
  padding: 8px;
  color: red;
  background-color: rgba(255, 0, 0, 0.1);
  font-weight: bold;
  text-align: center;
`

const container = css`
  text-align: center;

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 12px;
  }

  p {
    margin: 32px 0 12px;
    padding-top: 32px;
    border-top: 1px solid #ccc;

    &:before {
    }
  }
`

export default Form

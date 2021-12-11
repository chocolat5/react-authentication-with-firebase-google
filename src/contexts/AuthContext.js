import React, { useContext, useState, useEffect } from 'react'

import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider()

  function signup() {
    return signInWithPopup(auth, provider)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      // setCurrentUser(user)
      // setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

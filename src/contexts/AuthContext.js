import React, { useContext, useState, useEffect } from 'react'

import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'

// create context
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const provider = new GoogleAuthProvider()

  function signup() {
    return signInWithPopup(auth, provider)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setCurrentUser(user.displayName)
      }
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
      {children}
    </AuthContext.Provider>
  )
}

import React, { createContext, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

function Auth({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  })

  const logout = useCallback(() => {
    const { user } = window.localStorage
    if (user) {
      setUserInfo({
        isUserLoggedIn: false,
        user: null,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        logout,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Auth

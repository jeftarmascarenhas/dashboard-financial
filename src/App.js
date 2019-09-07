import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AuthContext } from 'contexts/auth'

import { LOGIN, HOME } from './routes'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

function App({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    function getStoreUser() {
      const { user } = window.localStorage
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
        },
      })
      setDidCheckUserIn(true)
    }
    getStoreUser()
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <div>Aguarde...</div>
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<div>Ladining app...</div>}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

export default App

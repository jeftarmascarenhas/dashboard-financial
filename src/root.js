import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'

import AuthProvider from 'contexts/auth'
import GlobalStyle from './styles/globalStyle'
import App from './app'

function Root() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default hot(module)(Root)

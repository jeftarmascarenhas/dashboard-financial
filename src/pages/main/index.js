import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HOME, EXCHANGE, PAGE404 } from 'routes'

import Header from 'components/header'
import Sidebar from 'components/sidebar'
import * as S from './styled'

const Home = lazy(() => import('pages/home'))
const Exchange = lazy(() => import('pages/exchange'))
const Page404 = lazy(() => import('pages/404'))

const Main = () => (
  <>
    <Suspense fallback="Loading...">
      <S.Wrapper>
        <Sidebar />
        <S.Content>
          <Header />
          <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={`${EXCHANGE}/:symbol`} component={Exchange} />
            <Route path={PAGE404} component={Page404} />
          </Switch>
        </S.Content>
      </S.Wrapper>
    </Suspense>
  </>
)

export default Main

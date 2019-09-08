import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HOME, EXCHANGE } from 'routes'

import Header from 'components/header'
import Sidebar from 'components/sidebar'
import * as S from './styled'

const Home = React.lazy(() => import('pages/home'))
const Exchange = React.lazy(() => import('pages/exchange'))

const Main = () => (
  <>
    <Suspense fallback="Loading...">
      <S.Wrapper>
        <Sidebar />
        <S.Content>
          <Header />
          <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={EXCHANGE} component={Exchange} />
          </Switch>
        </S.Content>
      </S.Wrapper>
    </Suspense>
  </>
)

export default Main

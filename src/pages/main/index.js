import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HOME, EXCHANGE } from 'routes'

const Home = React.lazy(() => import('pages/home'))
const Exchange = React.lazy(() => import('pages/exchange'))

const Main = () => (
  <>
    <Suspense fallback="Loading...">
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={EXCHANGE} component={Exchange} />
      </Switch>
    </Suspense>
  </>
)

export default Main

import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { publicRoutes } from './routes'
import { MAIN_ROUTE } from 'utils/routes.constants'


const AppRouter: React.FC = (): any => {
  return (
    <HashRouter>
      {/* <BrowserRouter basename="/"> */}
      <Switch>
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact={true} />
        )}
        {/* {user ? privatRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) : null} */}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
      {/* </BrowserRouter> */}
    </HashRouter>
  )
}

export default AppRouter

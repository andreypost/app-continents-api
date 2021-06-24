import React, { Suspense } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { publicRoutes } from './routes'
import { MAIN_ROUTE } from './utils/routes.constants'
import Loader from './components/Loader'

const AppRouter: React.FC = (): any => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                {/* {user ? privatRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) : null} */}
                <Redirect to={MAIN_ROUTE} />
            </Switch>
        </Suspense>
    )
}

export default AppRouter

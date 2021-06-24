import { lazy } from 'react'
const Main = lazy(() => import('./views/Main'))

import { MAIN_ROUTE } from './utils/routes.constants';

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
]

export const privatRoutes = [
    {
    },
]
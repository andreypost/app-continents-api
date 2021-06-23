import { lazy } from 'react'
const Main = lazy(() => import('./pages/Main'))

import { MAIN_ROUTE } from './utils/consts';

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
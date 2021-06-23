import React, { Suspense, lazy } from 'react'
import { HashRouter } from 'react-router-dom'
import Loader from './components/Loader'

const AppRouter = lazy(() => import('./AppRouter'))

const App: React.FC = () => (
    <HashRouter>
        {/* <BrowserRouter basename="/"> */}
        <Suspense fallback={<Loader />}>
            <AppRouter />
        </Suspense>
        {/* </BrowserRouter> */}
    </HashRouter>
)

export default App

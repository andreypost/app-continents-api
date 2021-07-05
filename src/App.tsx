import React, { Suspense, lazy } from 'react'
import { HashRouter } from 'react-router-dom'

const AppRouter = lazy(() => import('./AppRouter'))

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* <BrowserRouter basename="/"> */}
      <Suspense fallback>
        <AppRouter />
      </Suspense>
      {/* </BrowserRouter> */}
    </HashRouter>
  )
}

export default App

import React, { Suspense, lazy } from 'react'
import Spiner from 'Spiner'

const AppRouter = lazy(() => import('./AppRouter'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spiner />}>
      <AppRouter />
    </Suspense>
  )
}

export default App

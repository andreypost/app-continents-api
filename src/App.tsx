import React, { createContext, useState, Suspense, lazy } from 'react'
import { HashRouter } from 'react-router-dom'

interface LCProps {
  listState: string
  setListState: (arg0: any) => void
}

export const ListContext = createContext({} as LCProps)

const AppRouter = lazy(() => import('./AppRouter'))

const App: React.FC = () => {
  const [listState, setListState] = useState('')
  return (
    <ListContext.Provider value={{ listState, setListState }}>
      <HashRouter>
        {/* <BrowserRouter basename="/"> */}
        <Suspense fallback>
          <AppRouter />
        </Suspense>
        {/* </BrowserRouter> */}
      </HashRouter>
    </ListContext.Provider>
  )
}

export default App

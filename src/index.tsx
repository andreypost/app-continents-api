import React, { createContext } from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './styles/normalize.css'
import './styles/common.scss'
import App from './App'
// import './i18n'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
})

export const ListContext = createContext('')

//func for svg to load as sprites in index.html and use them in components -> <svg><use xlinkHref={arrow}></use></svg>
// const importAllSvg = (webpackContext: __WebpackModuleApi.RequireContext) => {
//   webpackContext.keys().forEach(webpackContext)
// }
// importAllSvg(require.context('./img/spriteSvg', false, /\.(svg)$/))

// if (process.env.NODE_ENV !== 'production') {
//   console.log(process.env.NODE_ENV, 'development ')
// }

ReactDom.render(
  <ListContext.Provider value={'none'}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ListContext.Provider>
  , document.getElementById('root'))

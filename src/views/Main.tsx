import React from 'react'
import './Main.styles.scss'
import Countries from 'components/Countries'

const Main: React.FC = () => {
  return (
    <main className="section">
      <Countries />
    </main>
  )
}
export default Main

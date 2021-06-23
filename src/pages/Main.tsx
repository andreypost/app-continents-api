import React from 'react'
import './main_styles.scss'
import Countries from '../countries/Countries'

const Main: React.FC = () => {
  return (
    <main className="section">
      <Countries />
    </main>
  )
}
export default Main

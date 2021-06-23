import React, { useContext, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useCollapseList } from './useCollapseList'
import './countries_styles.scss'
import Loader from '../components/Loader'
import { ListContext } from '..'

interface Continents {
  name: string,
  countries: [{
    name: string,
    languages: [{ name: string }]
  }]
}

interface ContinentsData {
  continents: Continents[]
}

const GET_COUNTRIES = gql`
query continents {
  continents {
    name,
    countries {
      name,
      languages {
        name
      }
    }
  }
}`

const Countries: React.FC = () => {
  const listContext = useContext(ListContext)
  const [listState, setListState] = useState(listContext)
  const { data, loading, error } = useQuery<ContinentsData>(GET_COUNTRIES)

  if (loading) return <Loader />
  if (error) return <p style={{ color: 'red' }}>Sorry, it is not possible to receive data now, maybe try again later.</p>

  return (
    <>
      {data && data.continents.length > 0 && data.continents.map((continent: { name: string; countries: any[] }) =>
        <ul key={continent.name} className="countries">
          <li className="list"><span onClick={useCollapseList.firstList}>{continent.name}</span>

            {continent.countries.map(country =>
              <ul key={country.name} className={listState + ' firstList'}>
                <li><span onClick={useCollapseList.secondList}>{country.name}</span>

                  {country.languages.map((language: { name: string }) =>
                    <ul key={language.name} className={listState + ' secondList'}>
                      <li><span onClick={useCollapseList.closeTree}>{language.name}</span></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </>
  )
}
export default Countries

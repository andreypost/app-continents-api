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
    <div className="countries">
      {data && data.continents.length > 0 && data.continents.map((continent: { name: string; countries: any[] }) =>
        <ul key={continent.name} className="list">
          <li><span onClick={e => useCollapseList.openTree(e, '.firstList')}>{continent.name}</span>

            {continent.countries.map(country =>
              <ul key={country.name} className={'firstList ' + listState}>
                <li><span onClick={e => useCollapseList.openTree(e, '.secondList')}>{country.name}</span>

                  {country.languages.map((language: { name: string }) =>
                    <ul key={language.name} className={listState + ' secondList'}>
                      <li className="last"><span onClick={e => useCollapseList.closeTree(e, '.list', '.firstList, .secondList', setListState)}>{language.name}</span></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  )
}
export default Countries

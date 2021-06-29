import React, { useContext } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useCollapseList } from 'utils/countries.helpers'
import styled from 'styled-components'
import Spiner from 'Spiner'
import { ListContext } from '../App'

const Div = styled.div`

ul {
  position: relative;
}

ul:before {
  content: '';
  height: 100%;
  position: absolute;
  left: 65px;
  bottom: -10px;
  border-left: 1px dashed black;
  z-index: -9;
}

.firstList:before, .secondList:before {
  height: unset;
  width: 50%;
  left: 27px;
  top: 12px;
  border-left: none;
  border-top: 1px dashed black;
}

.secondList:before {
  left: -12px;
}

li {
  margin: 10px auto;
}

li span {
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 2px 10px;
}

@media (min-width: 992px) {
  li span {
    cursor: pointer;
  }
}
`

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
  const { listState, setListState } = useContext(ListContext)
  const { data, loading, error } = useQuery<ContinentsData>(GET_COUNTRIES)

  if (loading) return <Spiner />
  if (error) return <p style={{ color: 'red' }}>Sorry, it is not possible to receive data now, maybe try again later.</p>

  return (
    <Div>
      {data && data.continents.length > 0 && data.continents.map((continent: { name: string; countries: any[] }) =>
        <ul key={continent.name} className="tree">
          <li><span onClick={e => useCollapseList.openTree(e, '.firstList')}>{continent.name}</span>

            {continent.countries.map(country =>
              <ul key={country.name} className={'firstList ' + listState}>
                <li><span onClick={e => useCollapseList.openTree(e, '.secondList')}>{country.name}</span>

                  {country.languages.map((language: { name: string }) =>
                    <ul key={language.name} className={listState + ' secondList'}>
                      <li><span onClick={e => useCollapseList.closeTree(e, '.tree', '.firstList, .secondList', setListState)}>{language.name}</span></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </Div>
  )
}
export default Countries

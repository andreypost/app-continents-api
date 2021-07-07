import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import Spiner from 'Spiner'
import TreeList from './TreeList'

const Div = styled.div`
  ul {
    position: relative;
    
    li {
      margin: 10px auto;
      
      span {
        display: flex;
        align-items: flex-start;
        font-weight: 500;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        padding: 2px 10px;
      }
    }
  }

  .tree:before,
  .firstList:before,
  .secondList:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 65px;
    bottom: -10px;
    border-left: 1px dashed black;
    z-index: -9;
  }

  .firstList:before,
  .secondList:before {
    height: unset;
    width: 50%;
    left: -15px;
    top: 12px;
    border-left: none;
    border-top: 1px dashed black;
  }

  .secondList:before {
    left: -95px;
  }

  @media (min-width: 992px) {
    li span {
      cursor: pointer;
    }
}`

interface Continents {
  name: string
  countries: [
    {
      name: string
      languages: [{ name: string }]
    },
  ]
}

interface ContinentsData {
  continents: Continents[]
}

const GET_COUNTRIES = gql`
  query continents {
    continents {
      name
      countries {
        name
        languages {
          name
        }
      }
    }
  }
`
const Countries: React.FC = () => {
  const { data, loading, error } = useQuery<ContinentsData>(GET_COUNTRIES)

  if (loading) return <Spiner />
  if (error) return <p style={{ color: 'red' }}>Sorry, it is not possible to receive data now, maybe try again later.</p>

  return (
    <Div>
      {data && data.continents.length > 0 && data.continents.map((continent: { name: string; countries: any[] }) =>
        <TreeList key={continent.name} continent={continent} />
      )}
    </Div >
  )
}
export default Countries



// first variant---

/*< Div >
{ data && data.continents.length > 0 && data.continents.map((continent: { name: string; countries: any[] }) =>
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
  </Div >*/
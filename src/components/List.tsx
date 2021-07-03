import React, { useState, useContext } from 'react'
import { ListContext } from '../App'

interface Props {
  data: any
  children?: any
  clase: any
}

const List: React.FC<Props> = ({ data, children, clase }: Props) => {
  const [firstlistState, setfirstListState] = useState('none')
  const { listState, setListState } = useContext(ListContext)

  const handleCloseTree = (e: { target: any }) => {
    // for (const ul of e.target.closest('.tree').querySelectorAll('ul:not(.firstList, .secondList)')) {
    //   ul.style.display = 'none'
    // }
    e.target.closest('.tree').querySelector('ul').style.display = 'none'
    setListState('none')
  }
  return (
    <ul className={clase}>
      {children ?
        <li>
          <span onClick={() => setfirstListState(state => state === 'none' ? 'block' : 'none')}>{data}</span>
          <ul style={{ display: firstlistState }}>{children}</ul>
        </li>
        :
        <li>
          <span onClick={e => handleCloseTree(e)}>{data}</span>
        </li>
      }
    </ul>
  )
}
export default List
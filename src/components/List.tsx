import React, { useState, useContext } from 'react'
import { ListContext } from './TreeList'

interface Props {
  children?: JSX.Element[]
  data: string
  clase: string
}

const List: React.FC<Props> = ({ children, data, clase }: Props) => {
  const { closeTreeList, setCloseTreeList } = useContext(ListContext)
  const [listState, setListState] = useState('none')

  const handleListState = () => {
    if (closeTreeList) {
      setCloseTreeList('')
      return
    }
    setListState(state => state === 'none' ? '' : 'none')
  }
  return (
    <ul className={clase}>
      {children ?
        <li>
          <span onClick={() => handleListState()}>{data}</span>
          <ul style={{ display: closeTreeList || listState }}>{children}</ul>
        </li>
        :
        <li>
          <span onClick={() => setCloseTreeList('none')}>{data}</span>
        </li>
      }
    </ul>
  )
}
export default List
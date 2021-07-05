import React, { createContext, useState } from 'react'
import List from './List'

interface LCProps {
    closeTreeList: string
    setCloseTreeList: (arg0: any) => void
}

export const ListContext = createContext({} as LCProps)

interface TLProps {
    continent: any
}

const TreeList: React.FC<TLProps> = ({ continent }: TLProps) => {
    const [closeTreeList, setCloseTreeList] = useState('none')
    return (
        <ListContext.Provider value={{ closeTreeList, setCloseTreeList }}>
            <List key={continent.name} data={continent.name} clase={'tree'}>
                {continent.countries.map(country =>
                    <List key={country.name} data={country.name} clase={'firstList'}>
                        {country.languages.map((language: { name: string }) =>
                            <List key={language.name} data={language.name} clase={'secondList'} />
                        )}
                    </List>
                )}
            </List>
        </ListContext.Provider>
    )
}

export default TreeList
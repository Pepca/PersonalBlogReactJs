import React from 'react'

// createContext
export const SearchContext = React.createContext()

export function ContextProvider({ children }) {
  // State
  const [searchState, setSearchState] = React.useState({
    isFound: true,
    searchValue: '',
  })

  // Render
  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  )
}

import React from 'react'

// createContext
export const Context = React.createContext()

// Provider
export function ContextProvider({ children }) {
  // State
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  const [searchState, setSearchState] = React.useState({
    isFound: true,
    searchValue: '',
  })

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)

  const result = {
    state: {
      sidebarIsOpen,
      searchState,
      windowWidth,
    },
    dispatch: {
      setWindowWidth,
      setSearchState,
      setSidebarIsOpen,
    },
  }

  // Function
  const resizeWindow = React.useCallback(() => {
    setWindowWidth(() => window.innerWidth)

    if (window.innerWidth > 991.98 && sidebarIsOpen === true) {
      setSidebarIsOpen(() => false)
    }
  }, [sidebarIsOpen])

  // Hook
  React.useEffect(() => {
    window.addEventListener('resize', resizeWindow)

    document.body.classList.toggle('_lock', sidebarIsOpen)

    return () => window.removeEventListener('resize', resizeWindow)
  }, [resizeWindow, sidebarIsOpen])

  // Render
  return <Context.Provider value={result}>{children}</Context.Provider>
}

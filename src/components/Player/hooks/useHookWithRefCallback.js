import { useRef, useCallback } from 'react'

export function useHookWithRefCallback() {
  const ref = useRef(null)

  const setRef = useCallback(node => {
    if (ref.current) {
      // return all events and etc
    }

    if (node) {
      // the body for ref
    }

    ref.current = node
  }, [])

  return [setRef]
}

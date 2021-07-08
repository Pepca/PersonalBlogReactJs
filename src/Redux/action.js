// Components
import * as types from './type'

// Search
export const getSearchValue = value => {
  return {
    type: types.SEARCH_VALUE,
    payload: value
  }
}

export const setIsFound = state => {
  return {
    type: types.IS_FOUND,
    payload: state
  }
}

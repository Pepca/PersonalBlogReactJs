// Redux
import { combineReducers } from 'redux'

// Components
import * as types from './type'

// Search
const searchReducer = (state = { searchValue: '', isFound: true }, action) => {
  switch (action.type) {
    case types.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case types.IS_FOUND:
      return {
        ...state,
        isFound: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  search: searchReducer
})

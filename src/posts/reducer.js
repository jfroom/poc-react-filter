import { handleActions } from 'redux-actions'
import { ActionTypes } from './actions'
import _ from 'lodash'

const reducer = handleActions({
  [ActionTypes.CHANGE_SEARCH_FILTER]: (state: State, action: Action) => {
    // Deep cloning to avoid mutating state
    let newState = { ...state, filters: _.cloneDeep(state.filters) }
    newState.filters.search = action.payload
    return newState
  },
  [ActionTypes.TOGGLE_FIELD_FILTER]: (state: State, action: Action) => {
    // Note: action.payload = [field, choice]
    const fieldsChosen =  _.cloneDeep(state.filters.fieldsChosen)
    const curChosenVals = fieldsChosen[action.payload[0]]
    const idx = curChosenVals.indexOf(action.payload[1])
    if (idx > -1) {
      curChosenVals.splice(idx, 1)
    } else {
      curChosenVals.push(action.payload[1])
    }
    return { ...state, filters: { ...state.filters, fieldsChosen }}
  },
}, {})

export default reducer

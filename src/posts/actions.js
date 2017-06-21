// @flow
import { createActions } from 'redux-actions'

export const ActionTypes = {
  CHANGE_SEARCH_FILTER: 'CHANGE_SEARCH_FILTER',
  TOGGLE_FIELD_FILTER: 'TOGGLE_FIELD_FILTER'
}

export const actions = // { toggleFieldFilter, changeSearchFilter }
  createActions({
    [ActionTypes.TOGGLE_FIELD_FILTER]: (field, choice) => ([field, choice]),
  }, ActionTypes.CHANGE_SEARCH_FILTER)

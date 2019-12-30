import { GETLIST } from '../action_types'
import { Map } from 'immutable'
const defaultState = Map({
  list:[]
})
const reducers = (state = defaultState, action) => {
  switch(action.type) {
    case GETLIST : 
      return state.set('list', [...state.get('list'), ...action.data])
    default: 
      return state
  }
}
export {
  reducers
} 
  
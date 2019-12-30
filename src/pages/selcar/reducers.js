import { GETCAR } from '../action_types'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  car_list: []
})
const reducers = (state = defaultState, action) => {
  switch(action.type) {
    case GETCAR : 
      return state.set('car_list', action.data)
    default: 
      return state
  }
}

export {
  reducers
} 
  
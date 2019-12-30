import {GETCARFRI} from '../action_types'

const defaulState = {
  car_fri: []
}

const reducers = (state = defaulState, action) => {
  switch(action.type) {
    case GETCARFRI : 
      return {
        car_fri: action.data
      }
    default: 
      return state
  }

}

export {
  reducers
}
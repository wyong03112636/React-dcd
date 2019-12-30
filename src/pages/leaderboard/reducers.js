import { GETLEADERBOARD, GETLEADERBOARDSUV, GETLEADERBOARDMPV } from '../action_types'
import { Map } from 'immutable'
const defaultState = Map({
  leader_list:[],
  leader_suvlist: [],
  leader_mpvlist: []
})

const reducers = (state = defaultState, action) => {
  switch(action.type) {
    case GETLEADERBOARD :
      return state.set('leader_list', [...state.get('leader_list'), ...action.data]) 
    case GETLEADERBOARDSUV :
      return state.set('leader_suvlist',[...state.get('leader_suvlist'), ...action.data]) 
    case GETLEADERBOARDMPV :
      return state.set('leader_mpvlist', [...state.get('leader_mpvlist'), ...action.data]) 
    default: 
      return state 
  }
}

export {
  reducers
} 
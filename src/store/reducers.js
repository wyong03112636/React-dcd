
import { combineReducers } from 'redux-immutable'
import { reducers as list} from '../pages/home/reducers.js'
import { reducers as car_list } from '../pages/selcar/reducers.js'
import { reducers as carfri_list } from '../pages/carfri/reducers'
import { reducers as leaderboard_list } from '../pages/leaderboard/reducers'
export default combineReducers({
  home: list,
  selcar: car_list,
  carfri: carfri_list,
  leaderboard: leaderboard_list
})
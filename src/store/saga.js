import { takeEvery } from 'redux-saga/effects'

import { action, carAction, carFriAction, leaderBoardAction, leaderBoardActionSUV, leaderBoardActionMPV} from '../pages/sagas'
import { LOADDATA, SELCAR, CARFRI, LEADERBOARD, LEADERBOARDSUV, LEADERBOARDMPV } from '../pages/action_types'

function* sagas() {
  yield takeEvery(LOADDATA, action)
  yield takeEvery(SELCAR, carAction)
  yield takeEvery(CARFRI, carFriAction)
  yield takeEvery(LEADERBOARD, leaderBoardAction)
  yield takeEvery(LEADERBOARDSUV, leaderBoardActionSUV)
  yield takeEvery(LEADERBOARDMPV, leaderBoardActionMPV)
}

export default sagas
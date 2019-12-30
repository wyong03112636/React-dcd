import { put } from 'redux-saga/effects'

import get from '../http/http'

import { GETLIST, GETCAR, GETCARFRI,GETLEADERBOARD, GETLEADERBOARDSUV } from './action_types'

function* loadData(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETLIST, data: result});
  } catch (e) {
    
  }
}

function* loadCarData(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETCAR, data: result});
  } catch (e) {
    
  }
}

function* loadCarFriData(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETCARFRI, data: result});
  } catch (e) {
    
  }
}

function* loadLeaderBoardData(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETLEADERBOARD, data: result});
  } catch (e) {
    
  }
}

function* loadLeaderBoardDataSUV(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETLEADERBOARDSUV, data: result});
  } catch (e) {
    
  }
}

function* loadLeaderBoardDataMPV(action) {
  try {
    const result = yield get({
      url: action.url,
      params: action.params
    })
    yield put({type: GETLEADERBOARDSUV, data: result});
  } catch (e) {
    
  }
}

export {
  loadData as action,
  loadCarData as carAction,
  loadCarFriData as carFriAction,
  loadLeaderBoardData as leaderBoardAction,
  loadLeaderBoardDataSUV as leaderBoardActionSUV,
  loadLeaderBoardDataMPV as leaderBoardActionMPV
}
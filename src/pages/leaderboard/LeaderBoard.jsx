import React, { useEffect, useCallback, useState} from 'react'
import { connect } from 'react-redux'
import { LEADERBOARD, LEADERBOARDSUV, LEADERBOARDMPV } from '../action_types'
import { LeaderBoardWrap, CarWrap } from './styledLeaderBoard'
import _ from 'loadsh';


function LeaderBoard({loadLeaderdata, leader_list, leader_suvlist, leader_mpvlist}) {

  const [list, setList] = useState(leader_list)
  const [offset, setOffset] = useState(0);
  const [type, setType] = useState(100);
  const [action_type, setAction_type] = useState(LEADERBOARD);
  const [list_suv, setListSuv] = useState(leader_suvlist);
  const [list_mpv, setListMpv] = useState(leader_mpvlist)

  const handleScroll = _.debounce(useCallback(
    (e) => {
      if(e.target.scrollTop + e.target.clientHeight > (list.length  * e.target.lastChild.offsetHeight)) {
        setOffset(offset => offset + 15)
      }  
    },
    [list.length],
  ), 300)

  const handleClick = useCallback(
   (e) => {
      if(e.target.innerHTML === '轿车'){
        e.target.classList.add('active')
        e.target.nextSibling.classList.remove('active')
        e.target.nextSibling.nextSibling.classList.remove('active')
        setType(100);
        setOffset(0);
        setAction_type(LEADERBOARD);
        setList(leader_list)
      } else if(e.target.innerHTML === 'SUV') {
        e.target.classList.add('active')
        e.target.nextSibling.classList.remove('active')
        e.target.previousSibling.classList.remove('active')
        setType(200);
        setOffset(0);
        setAction_type(LEADERBOARDSUV);
        setList(leader_suvlist)
      } else if(e.target.innerHTML === 'MPV') {
        e.target.classList.add('active')
        e.target.previousSibling.classList.remove('active')
        e.target.previousSibling.previousSibling.classList.remove('active')
        setType(300);
        setOffset(0);
        setAction_type(LEADERBOARDMPV);
        setList(leader_mpvlist)
      }
    },
    [leader_suvlist, leader_mpvlist, leader_list],
  )

  const getDate = useCallback(async (offset, type, action_type) => {
    await loadLeaderdata({
      type: action_type,
      url: '/api/motor/car_show/v1/get_rank/',
      params: {
        rank_type: type,
        offset,
        limit: 15,
        city_name: '北京'
      }
    })
  }, [loadLeaderdata])

  useEffect(() => {
    (async function(){
      await getDate(offset, type,action_type);
   })() 
  }, [getDate, offset, type, action_type])
  
  useEffect(() => {
    setList(leader_list);
  }, [leader_list])

  useEffect(() => {
    setListSuv(leader_suvlist);
  }, [leader_suvlist])

  useEffect(() => {
    setListMpv(leader_mpvlist);
  }, [leader_mpvlist])

  return (
    <LeaderBoardWrap onScroll={async e => {e.persist();  await handleScroll(e)}}>
      <ul>
        <li className='active' onClick={async e => {e.persist();  await handleClick(e)}}>轿车</li>
        <li onClick={async e => {e.persist();  await handleClick(e)}} >SUV</li>
        <li onClick={async e => {e.persist();  await handleClick(e)}}>MPV</li>
      </ul>
      <ul>
        <li className='activee'>全部</li>
        <li>紧凑型车</li>
        <li>微型车</li>
        <li>小型车</li>
        <li>中型车</li>
      </ul>
      {
        list && list.map((value, index) => {
          return (
            <CarWrap key={value + index} num={value.last_rank}>
              <div>{value.last_rank > 3? value.last_rank : null}</div>
              <div><img src={value.image} alt=""/></div>
              <div>
                <span>{value.series_name}</span>
                <span>{value.min_price}-{value.max_price}</span>
              </div>
            </CarWrap>
          )
        })
      }
      {
        list_suv && list_suv.map((value, index) => {
          return (
            <CarWrap key={value + index} num={value.last_rank}>
              <div>{value.last_rank > 3? value.last_rank : null}</div>
              <div><img src={value.image} alt=""/></div>
              <div>
                <span>{value.series_name}</span>
                <span>{value.min_price}-{value.max_price}</span>
              </div>
            </CarWrap>
          )
        })
      }
      {
        list_mpv && list_mpv.map((value, index) => {
          return (
            <CarWrap key={value + index} num={value.last_rank}>
              <div>{value.last_rank > 3? value.last_rank : null}</div>
              <div><img src={value.image} alt=""/></div>
              <div>
                <span>{value.series_name}</span>
                <span>{value.min_price}-{value.max_price}</span>
              </div>
            </CarWrap>
          )
        })
      }
    </LeaderBoardWrap>
  )
}
export default connect(
  (state) => {
    return {
      leader_list: state.getIn(['leaderboard', 'leader_list']),
      leader_suvlist: state.getIn(['leaderboard', 'leader_suvlist']),
      leader_mpvlist: state.getIn(['leaderboard', 'leader_mpvlist']),
    }
  },(dispatch) => {
    return {
      loadLeaderdata(action) {
        dispatch({
          type: action.type,
          url: action.url,
          params: action.params
        })
      }
    }
  }
)(LeaderBoard)

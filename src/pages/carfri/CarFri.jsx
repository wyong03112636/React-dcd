import { connect } from 'react-redux'
import {CARFRI } from '../action_types'
import React, { Component } from 'react'
import { CarFriWrap } from './styledCarfri'
import zx from '../../assets/images/aaa.png'
import zan from '../../assets/images/bbb.png'
class CarFri extends Component {
  componentDidMount() {
    this.props.loadData({
      url: '/api/motor/stream/api/news/feed/web/v47/',
      params: {
        aid: 1230,
        channel: 'm_web',
        device_platform: 'wap',
        category: 'motor_car_cmg',
        max_behot_time: 0,
        min_behot_time: 0,
        web_id: 6766507412645381645,
        impression_info: {"page_id":"page_cmg_list","product_name":"m_station","zt":"m_station"},
        tt_from:''
      }
    })
  }
  
  render() {
    return (
      <CarFriWrap>
        {
          this.props.carfri && this.props.carfri.map((value, index) => {
            return (
              <section key={value + index}>
                <div>
                  <span><img src={value.info.user_info.avatar_url} alt=""/></span>
                  <span>{value.info.user_info.name}</span>
                </div>
                <p>
                  <span>#{value.info.repost_info.community_info.motor_name}#</span>
                  <span>{value.info.content}</span>
                </p>
                <div>
                  {
                    value.info.image_list.map((value, index) => {
                      return (
                        <img key={value + index} src={value.url} alt=""/>
                      )
                    })
                  }
                </div>
                <div>
                  <span>
                    <img src={zan} alt=""/>
                    <i>{value.info.digg_count}</i>
                  </span>
                  <span>
                    <img src={zx} alt=""/>
                    <i>{value.info.comment_count}</i>
                  </span>
                </div>
              </section>
            )
          })
        }  
      </CarFriWrap>
    )
  }
}

export default connect((state) => {
  return{
    carfri: state.get('carfri').car_fri
  }
}, (dispatch) => {
  return {
    loadData(action) {
      dispatch({
        type: CARFRI,
        url: action.url,
        params: action.params
      })
    }
  }
})(CarFri)

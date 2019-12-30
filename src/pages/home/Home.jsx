import { HomeWrap, LitVideo, Pic, BigVideo } from './styledhome'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOADDATA } from '../action_types'
import action from '../../assets/images/action.png'
import { withRouter } from 'react-router-dom' 

 class Home extends Component {
  
  componentDidMount() {
    this.props.loadData({
      url:'/api/motor/stream/api/news/feed/web/v47/',
      params: {
        aid: 1230,
        channel: "m_web",
        device_platform: "wap",
        category: "motor_car",
        max_behot_time: 0,
        min_behot_time: 0,
        web_id: 6766507412645381645,
        impression_info: {"page_id":"page_category","sub_tab":"motor_car","product_name":"m_station","zt":"m_station"},
        tt_from: ''
      }
    })
  }
  
  handleLoad = () => {
    this.props.loadData({
      url:'/api/motor/stream/api/news/feed/web/v47/',
      params: {
        aid: 1230,
        channel: "m_web",
        device_platform: "wap",
        category: "motor_car",
        max_behot_time: 0,
        min_behot_time: 0,
        web_id: 6766507412645381645,
        impression_info: {"page_id":"page_category","sub_tab":"motor_car","product_name":"m_station","zt":"m_station"},
        tt_from: ''
      }
    })
  }

  handleClick(id) {
    this.props.history.push({
      pathname: `/details/${id}`,
    })
  }
  
  render() {
    return (
      <HomeWrap>
       {this.props.list && this.props.list.map((value) => {
          return (
          value.info.image_type === 3 ?
           <Pic key={value.unique_id} onClick={() => {this.handleClick(value.unique_id_str)}}>
              <p>{value.info.title}</p>
              <div>
                {value.info.image_list.map((item) => {
                  return (
                    <div className='slide' key={item.uri}>
                      <img src={item.url} alt=""/>
                    </div>
                  )
                })}
              </div>
              <span>{value.info.source} {value.info.comment_count}评论 7分钟前 #途观L</span>
            </Pic>: 
           value.info.image_type === 2 ?
          <LitVideo key={value.unique_id} onClick={() => {this.handleClick(value.unique_id_str)}}>
          <div className="one">
            <p>{value.info.title}</p>
            <span>{value.info.source} {value.info.comment_count}评论 7分钟前 #途观L</span>
          </div>
          <div className="two">
            {value.info.image_list.map((item) => {
              return (
                <div className='slide' key={item.uri}>
                  <img src={item.url} alt=""/>
                </div>
              )
            })}
          </div>
        </LitVideo> : 
       value.info.image_type === 4 ? 
          <BigVideo key={value.unique_id} onClick={() => {this.handleClick(value.unique_id_str)}}>
          <p>{value.info.title}</p>
          <div>
            {value.info.image_list.map((item) => {
              return (
                <div className='slide' key={item.uri}>
                  <img src={item.url} alt=""/>
                  <span><img src={action} alt=""/></span>
                </div>
              )
            })}
          </div>
          <span>{value.info.source} {value.info.comment_count}评论 7分钟前 #途观L</span>
        </BigVideo> : null
        )
      })
      }
      <div className="load" onClick={this.handleLoad}>
          点击加载更多。。。
      </div>
      </HomeWrap>
    )
  }
}
export default connect((state) => {
  return{
    list: state.getIn(['home', 'list'])
  }
}, (dispatch) => {
  return {
    loadData(action) {
      dispatch({
        type: LOADDATA,
        url: action.url,
        params: action.params
      })
    }
  }
})(withRouter(Home))
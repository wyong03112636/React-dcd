import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SELCAR } from '../action_types'
import siyu from '../../assets/images/siyu.webp'
import xuanyi from '../../assets/images/xuanyi.webp'
import suteng from '../../assets/images/suteng.webp'
import mingjue from '../../assets/images/mingjue.webp'
import yage from '../../assets/images/yage.webp'
import langyi from '../../assets/images/langyi.webp'

import { SecCarHead, CARA, CarBrand } from './styledSelcar'

class SelCar extends Component {
  constructor() {
    super();
    this.letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  componentDidMount() {
    this.props.loadCarData({
      url: '/api/motor/brand/m/v1/brand/',
      params: {
        device_id: 0
      }
    })
    window.onload = function() {
     setTimeout(() => {
      let logos = document.getElementsByClassName('iIuPBu');
      for(let i = 0; i < logos.length; i++) {
        if(logos[i].offsetTop < this.document.body.clientHeight) {
          logos[i].children[0].children[0].src = logos[i].children[0].children[0].getAttribute('data-src')
        }
      }
     }, 500);
    }
  }

  

  handleClick = (e) => {
    document.getElementsByClassName('hIqpKh')[0].scrollTop = document.getElementsByClassName(e.target.innerText)[0].offsetTop - 96;
  }

  handleScroll = (e) => {
    let client_height =  e.target.clientHeight
    let logos = document.getElementsByClassName('iIuPBu')
    for(let i = 0; i < logos.length; i ++) {
      if(logos[i].offsetTop < client_height + e.target.scrollTop + 96) {
        logos[i].children[0].children[0].src = logos[i].children[0].children[0].getAttribute('data-src')
      }
    }
  }

  render() {
    return (
      <SecCarHead onScroll={async e => {e.persist();  await this.handleScroll(e)}}>
        <section>
        {
          this.props.car_list && this.props.car_list.map((value, index) => {
            return (
               value.type === '1021' ? 
               <div key={value.type + index}>
                 <div>
                 {
                   value.info.brand.map((value, index) => {
                    return (
                      <div key={value + index}>
                        <span><img src={value.image_url} alt=""/></span>
                        <span>{value.brand_name}</span>
                      </div>
                    )
                   })
                 }
                 </div>
                 <section>
                   <div>
                     <img src={siyu} alt=""/>
                     <span>思域</span>
                   </div>
                   <div>
                     <img src={xuanyi} alt=""/>
                     <span>轩逸</span>
                   </div>
                   <div>
                     <img src={suteng} alt=""/>
                     <span>速腾</span>
                   </div>
                   <div>
                     <img src={mingjue} alt=""/>
                     <span>名爵6</span>
                   </div>
                   <div>
                     <img src={yage} alt=""/>
                     <span>雅阁</span>
                   </div>
                   <div>
                     <img src={langyi} alt=""/>
                     <span>朗逸</span>
                   </div>
                 </section>
               </div> :
               value.type === '1012'?
               <div key={value.type + index} style={{display:'inline-block', height: '.36rem',width: '100%', textAlign:'center', lineHeight: '.36rem'}}>
                 按价格、级别、排量等条件选车>
               </div>:
                value.type === '1000' ? 
                <CARA key={value.type + index} className={value.info.pinyin}>
                  {
                    value.info.pinyin
                  }
                </CARA>:
                 value.type === '1001' ?
                 <CarBrand key={value.type + index}>
                  <span><img src='' data-src={value.info.image_url} alt=""/></span>
                  <span>{value.info.brand_name}</span>
                 </CarBrand>: null
            )
          })
        }
        <div className='letter'>
          {
            this.letter.map((value, index) => {
            return <span key={value + index} onClick={ async e => {e.persist();  await this.handleClick(e)}}>{value}</span>
            })
          }
        </div>
        
        </section>
      </SecCarHead>
    )
  }
}
export default connect((state) => {
  return{
    car_list: state.getIn(['selcar', 'car_list'])
  }
}, (dispatch) => {
  return {
    loadCarData(action) {
      dispatch({
        type: SELCAR,
        url: action.url,
        params: action.params
      })
    }
  }
})(SelCar)

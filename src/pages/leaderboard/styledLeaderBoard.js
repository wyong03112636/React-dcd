import styled from 'styled-components'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import thr from '../../assets/images/thr.png'

export const LeaderBoardWrap = styled.div`
  height: calc(100% - .96rem);
  overflow-y: scroll;
  background: #fff;
  >ul:nth-of-type(1) {
    height: .63rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      margin: 0 .1rem 0 .15rem;
      color: #999;
      font-size: .16rem;
      &.active {
        border-bottom: 2px solid #ff9100;
        color:#333;
      }
    }
  }
  >ul:nth-of-type(2) {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 .03rem .08rem .14rem;
    li{
      font-size: .14rem;
      padding: .06rem .12rem;
      background: #f6f6f6;
      border-radius: 2px;
      margin-right: .1rem;
      margin-top: .1rem;
      &.activee{
        color: #ff5f00;
      }
    }
  }
`
export const CarWrap = styled.section`
  display: flex;
  justify-content: start;
  padding: .08rem .14rem;
  >div:nth-of-type(1) {
    width: .32rem;
    height: .32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${(props) => props.num === 1 ? one: props.num === 2 ? two : props.num === 3? thr :null}) center;
    background-size: contain;
    font-size: .2rem;
    font-weight: 700;
  }
  >div:nth-of-type(2) {
    width: 1.25rem;
    margin: 0 .1rem;
    img{
      width: 100%;
    }
  }
  >div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    >span:nth-of-type(1) {
      font-size: .16rem;
      color: #333;
    }
    >span:nth-of-type(2) {
      font-size: .14rem;
      color: #ff5f00;
    }
  }

`
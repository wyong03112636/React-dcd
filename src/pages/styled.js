import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import logo2 from '../assets/images/logo2.png'
import magnifier from '../assets/images/magnifier.png'

export const HeaderWrap = styled.div`
  height: .48rem;
  background: #333;
  display: flex;
  justify-content: space-between;
  header{
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 .1rem;
    .header-left{
      background: #fff;
      background: url(${logo}) no-repeat 0 50%;
      width: .84rem;
      height: .23rem;
      background-size: contain;
      margin-top: .1rem;
    }
    .header-middle{
      flex: 1;
      padding: 0 .08rem;
      input{
        border: 0;
        border-radius: 2px;
        font-size: .14rem;
        height: .26rem;
        color: #999;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        width: 100%;
        margin-top: .1rem;
        background:url(${magnifier}) no-repeat 10px 50%;
        background-color: hsla(0,0%,100%,.2);
        background-size: .2rem;
      }
    }
    .header-right{
      margin-top: .1rem;
      display: flex;
      span{
        width: .24rem;
        height: .24rem;
        display: inline-block;
        background: url(${logo2}) no-repeat 0 50%;
        background-size: contain;
      }
      i{
        width:.37rem;
        display:inline-block;
        color:#fff;
        font-size: .1rem;
        margin-left: .04rem;
      }
      em{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        width: .2rem;
        height: .2rem;
        margin-top: .04rem;
        b{
          width: .14rem;
          height: 2px;
          background: #fff;
          &:nth-of-type(2) {
            background: #ffe100;
          }
        }
      }
      strong{
        display: inline-block;
        width: 1px;
        height: .28rem;
        margin-left: .06rem;
        margin-right: .1rem;
        background: #fff;
        transform: scaleX(.5);
      }
    }
  }
`
export const NavWrap = styled.div `
  background: #333;
  height: .48rem;
  overflow-x: scroll;
  ul{
    display: flex;
    justify-content: flex-start;
    width: max-content;
    position: relative;
    &::before{
    position: absolute;
    left: 0;
    right: 0;
    content: "";
    height: 1px;
    transform-origin: 0 0;
    transform: scaleY(.5);
    top: 0;
    border-top: 1px solid #fff;
  }
    li{
      margin: 0 .12rem;
      font-size: .16rem;
      color: #fff;
      line-height: .48rem;
      a{
        color: #fff;
      }
    }
    .active{
      position: relative;
      &::after{
        position: absolute;
        left: 50%;
        content: "";
        border-bottom: 3px solid #ffcb00;
        bottom: -5px;
        width: .45rem;
        transform: translateX(-50%);
      }   
    }
  }
`


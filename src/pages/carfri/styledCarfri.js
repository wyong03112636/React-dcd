import styled from 'styled-components'

export const CarFriWrap = styled.div`
  height: calc(100% - .96rem);
  overflow-y: scroll;
  section{
    background: #fff;
    padding-bottom: .06rem;
    >div:nth-of-type(1) {
      padding: .14rem .14rem .1rem;
      span{
        display: inline-block;
      }
      >span:nth-of-type(1) {
       img{
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        margin-right: .08rem;
       }
      }
      >span:nth-of-type(2) {
        line-height: .4rem;
        color: #666;
        font-weight: bold;
      }
    }
    p{
      padding: 0 .14rem;
      margin-bottom: .1rem;
      span:nth-of-type(1) {
        color: #406599;
        margin-right: .08rem;
        font-size: .17rem
      }
      span:nth-of-type(2) {
        font-size: .17rem;
        color: #333;
      }
    }
    >div:nth-of-type(2) {
      padding: 0 .14rem;
      img{
        width: 100%;
      }  
    }
    >div:nth-of-type(3) {
      display: flex;
      justify-content:space-between;
      padding: 0 .14rem;
      position: relative;
      margin: .1rem 0;
      height: .4rem;
      ::before{
        content: '';
        width: 200%;
        height: 200%;
        transform-origin: 0 0;
        position: absolute;
        border-top: 1px solid #333;
        transform: scale(.5);
        top: 0;
        left: 0;
      }
      span{
        width: 50%;
        display:flex;
        justify-content:center;
        align-items: center;
        img{
          width: .18rem;
          height: .18rem;
          margin-right: .08rem;
        }
      }
    }
  }
`
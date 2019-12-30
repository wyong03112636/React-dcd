import styled from 'styled-components'

export const DetailsWrap = styled.div`
  height: calc(100% - .48rem);
  overflow-y: scroll;
  background: #fff;
`

export const ContentWrap = styled.div`
  padding: .15rem;
  >div:nth-of-type(1) {
    word-wrap: break-word;
    font-size: .22rem;
    line-height: .3rem;
    color: #333;
  }
  h6{
    font-size: .14rem;
    color: #333;
  }
  >div:nth-of-type(2) {
    height: ${props => {return props.flag ? '15rem' : ''}};
    overflow-y: hidden;
    P{
      font-size: .18rem;
      line-height: .32rem;
      margin-top: 20px;
    }
    .pgc-img{
      img{
        width: 100%;
      }
    }
  }
  span{
    display: ${props => props.flag ? 'inline-block': 'none'};
    text-align: center;
    line-height: .8rem;
    width: 100%;
    height: .8rem;
    background: linear-gradient(to top, #ccc, #fff);
  }
`
export const ListWrap = styled.div`
  padding: 0 .15rem;
  section{
    display: flex;
    justify-content: space-between;
    img{
      transform: scale(.8);
    }
    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
        font-size: .16rem;
        line-height: .22rem;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        word-break: break-all;
      }
      span{
        color: #999;
        font-size: .12rem;
        margin-top: .05rem;
      }
    }
  }
`
export const VideoWrap = styled.div`
  >div:nth-of-type(1) {
    div{
      img{
        width: 100%;
      }
    }
  }
  >div:nth-of-type(2) {
    padding: .15rem;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: .18rem;
      color: #000;
      line-height: .26rem;
    }
    span{
      color:#999;
      font-size: .14rem;
      margin-right: .15rem;
    }

  }
  >div:nth-of-type(3) {
    padding: 0 .15rem;
    >span:nth-of-type(1){
      font-size: .16rem;
      line-height: .22rem;
      font-weight: normal;
      width: max-content;
    }
    >span:nth-of-type(2) {
      color:#999;
      margin-left: .15rem;
    }
    >div{
      display: flex;
      justify-content: space-between;
      padding: .15rem 0;
      img{
        width: 33%;
      }
      >div{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding: .1rem 0;
        >span:nth-of-type(1) {
          font-size: .16rem;
          line-height: 1;
          margin-bottom: 8px;
          color: #222;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
        }
        >span:nth-of-type(2) {
          color: var(--highlight-color,#ff9100);
          font-size: .14rem;
          line-height: 1;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
        }
        >span:nth-of-type(3) {
          font-size: .12rem;
          margin-top: 8px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
        }
      }
      button{
        border: none;
        display: inline-block;
        width: .66rem;
        height: .28rem;
        border-radius: .14rem;
        line-height: .28rem;
        font-size: .14rem;
        background-color: #ffe100;
        text-align: center;
        color: #333;
        align-self: center;
      }
    }
  }
`
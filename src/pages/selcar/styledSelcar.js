import styled from 'styled-components'


export const CARA = styled.div`
  width: 100%;
  font-size: .14rem;
  line-height: .2rem;
  color: rgb(102, 102, 102);
  padding: .04rem .1rem .04rem .15rem;
  background: rgb(244, 245, 246);
  box-sizing: border-box;
`
export const CarBrand = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  span:nth-of-type(1) {
    display: block;
    width: .4rem;
    height: .4rem;
    margin: 0 .15rem;
    img{
      width: 100%;
    }
  }
  span:nth-of-type(2) {
    padding: .22rem 0;
    font-size: .14rem;
    line-height: .17rem;
    color: rgb(102, 102, 102);
  }
`

export const SecCarHead = styled.div`
  height: calc(100% - .92rem);
  overflow-y: scroll;
  section{
    background: #fff;
    >div{
      >div{
        display: flex;
        justify-content: space-around;
        padding: .15rem .1rem;
        span{
          color: #666;
          img{
            width: .2rem;
            height: .2rem;
            font-size: .2rem;

          }
        }
      }
      section{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: center;
        padding: 0 .1rem .04rem;
        div{
          width: 33.33%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          img{
            width: 85%;
          }
        }
      }
    }
    .letter{
      position: fixed;
      top: 1.26rem;
      right: 0;
      bottom: .8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: .1rem;
      font-weight: bold;
      box-sizing: border-box;
      span{
        color: rgb(42, 144, 215);
        padding: 0 .05rem 0 .15rem
      }
    }
  }
`
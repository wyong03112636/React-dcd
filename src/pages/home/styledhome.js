import styled from 'styled-components'

export const HomeWrap = styled.div`
  background: #fff;
  color: #333;
  height: calc(100% - .96rem);
  overflow-y: scroll;
  .load{
    height: .3rem;
    font-size: .14rem;
    display:flex;
    align-items: center;
    justify-content: center;

  }
`
export const Pic = styled.div`
  padding: .13rem .15rem
  p{
    color: #333;
    font-size: .19rem;
    line-height: .22rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; */
  }
  >div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: .04rem;
    .slide{
      width: 33.33%;
      img{
        width: 100%;
      }
    }
  }
  span{
    margin-top:.08rem;
    display:inline-block;
    color: #999;
    font-size: .12rem;
    line-height: .16rem;
    white-space: nowrap;
  }
`

export const LitVideo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .13rem .15rem;
  .one {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: #333;
      font-size: .19rem;
      line-height: .22rem;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    span {
      margin-top:.08rem;
      display:inline-block;
      color: #999;
      font-size: .12rem;
      line-height: .16rem;
      white-space: nowrap;
    }
  }
  .two {
    width: 33.33%;
    .slide{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
`

export const BigVideo = styled.div`
  padding: .13rem .15rem
  p{
    color: #333;
    font-size: .19rem;
    line-height: .22rem;
  }
  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .slide{
      width: 100%;
      height: auto;
      position: relative;
      margin-top: .03rem;
      img{
        width: 100%;
      }
      span{
        position: absolute;
        top: 50%;
        left: 50%;
        width: .36rem;
        height: .36rem;
        margin-left: -.18rem;
        margin-top: -.18rem;
      }
    }
  }
  span{
    margin-top:.08rem;
    display:inline-block;
    color: #999;
    font-size: .12rem;
    line-height: .16rem;
    white-space: nowrap;
  }
`
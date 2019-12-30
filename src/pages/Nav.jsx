import React from 'react'
import { NavWrap } from './styled'
import { NavLink, Switch, Route} from 'react-router-dom'
import Home from './home/Home'
import SelCar from './selcar/SelCar'
import CarFri from './carfri/CarFri'
import LitVideo from './litvideo/LitVideo'
import LeaderBoard from './leaderboard/LeaderBoard'
import Serv from './serv/Serv'
import Article from './article/Article'
import Video from './video/Video'

export default function Nav() {
  return (
        <>
        <NavWrap>
          <ul>
            <li><NavLink to={{pathname: '/index/home'}}>首页</NavLink>  </li>
            <li><NavLink to={{pathname: '/index/selcar'}}>选车</NavLink></li>
            <li><NavLink to={{pathname: '/index/carfri'}}>车友圈</NavLink></li>
            <li><NavLink to={{pathname: '/index/litvideo'}}>小视频</NavLink></li>
            <li><NavLink to={{pathname: '/index/leaderboard'}}>排行榜</NavLink></li>
            <li><NavLink to={{pathname: '/index/serv'}}>服务</NavLink></li>
            <li><NavLink to={{pathname: '/index/article'}}>文章</NavLink></li>
            <li><NavLink to={{pathname: '/index/video'}}>视频</NavLink></li>
          </ul>
        </NavWrap>
      <Switch>
        <Route path='/index/home' component={Home}></Route>
        <Route path='/index/selcar' component={SelCar}></Route>
        <Route path='/index/carfri' component={CarFri}></Route>
        <Route path='/index/litvideo' component={LitVideo}></Route>
        <Route path='/index/leaderboard' component={LeaderBoard}></Route>
        <Route path='/index/serv' component={Serv}></Route>
        <Route path='/index/article' component={Article}></Route>
        <Route path='/index/video' component={Video}></Route>
      </Switch>
    </>
   
  )
}

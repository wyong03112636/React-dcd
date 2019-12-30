import React, { Fragment, useCallback} from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderWrap } from './styled'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav'
import Details from './home/details/Details'
import '../assets/reset.css'
export default function LayOut() {
  let history = useHistory()
  let handleClick = useCallback(() => {
    history.goBack()
  }, [history])

  return (
  <Fragment>
    <HeaderWrap>
        <header>
          <div className="header-left" onClick={() => {handleClick()}}></div>
          <div className="header-middle">
            <input type="text" placeholder="搜你所想"/>
          </div>
          <div className="header-right">
            <span></span>
            <i>打开客户端</i>
            <strong></strong>
            <em>
              <b></b>
              <b></b>
              <b></b>
            </em>
          </div>
        </header>
      </HeaderWrap>
    <Router>
      <Switch>
        <Route path='/index' render={
          props => {
            return <Nav key={props.location.key} {...props}></Nav>
          }
        }>
        </Route>
        <Route path='/details/:id' render={
          (props) => {
            return  <Details key={props.match.params.id}{...props}></Details>   
          }
          }></Route>
        <Redirect from="/" to="/index/home"></Redirect>
      </Switch>
    </Router>
  </Fragment>
  )
}

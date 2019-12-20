import React from 'react'
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom'
import asyncComponent from './asyncComponent'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.router = this.router.bind(this)
  }

  router(menus,parentPath){
    if(typeof parentPath === 'undefined'){
      parentPath = ''
    }
    return menus.map(item => {
      if(item.children){
        return this.router(item.children,parentPath + item.path)
      }else{
        return <Route key={item.key} path={parentPath + item.path} exact component={asyncComponent(() => import(`../views${parentPath + item.path}`))} />
      }
    })
  }
  
  redirect(menus,parentPath){
    if(typeof parentPath === 'undefined'){
      parentPath = ''
    }
    // 只需要找到第一个可用的路由
    for(let i=0;i<menus.length;i++){
      if(menus[i].children){
        return this.redirect(menus[i].children,parentPath + menus[i].path)
      }else{
        return <Redirect from="/" exact to={parentPath + menus[i].path}></Redirect>
      }
    }
  }
  
  render(){
    return (
      <Switch>
        {this.router(this.props.menus)}
        {this.redirect(this.props.menus)}
      </Switch>
    )
  }
}

export default App

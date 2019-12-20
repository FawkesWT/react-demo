import React from 'react';
import { Menu } from 'antd';
import { withRouter} from 'react-router-dom';

const { SubMenu } = Menu

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys: this.props.location.pathname === '/'? '/tableComponent' : this.props.location.pathname
    }
    this.meunuItem = this.meunuItem.bind(this)
  }
  
  meunuItem(menus,parentPath){
    if(typeof parentPath === 'undefined'){
      parentPath = ''
    }
    return menus.map(item => {
      if(item.children){
        return <SubMenu key={item.key} title={item.name}>{this.meunuItem(item.children,parentPath + item.path)}</SubMenu>
      }else{
        return <Menu.Item key={item.key} onClick={() => {this.props.history.push(parentPath + item.path)}}><span>{item.name}</span></Menu.Item>
      }
    })
  }
  
  render(){
    return (
      <Menu
        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
        mode="inline"
        theme="dark"
        mode="horizontal"
      >
        {this.meunuItem(this.props.menus)}
      </Menu>
    )
  }
}


export default withRouter(App);

import React from 'react'
import { Layout} from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import SiderMenu from './components/siderMenu'
import MenuRouter from './components/router'
import http from './server'
const { Header, Content } = Layout

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    }
  }
  
  componentDidMount(){
    http.get('/menus').then(menus => {
      this.setState({
        menus
      })
    })
  }
  
  render(){
    return (
      <Router>
        <Layout style={{height: '100%'}}>
          <Header style={{color: '#fff'}}>
            <SiderMenu menus={this.state.menus} />
          </Header>
          <Layout>
            <Layout style={{padding: '15px'}}>
              <Content style={{backgroundColor: '#fff'}}>
                <MenuRouter menus={this.state.menus} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App;
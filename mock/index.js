const Mock = require('mockjs')

const mock = app => {
  app.get('/getTableList',(req,res) => {
    res.send({
      status: 200,
      message: '成功了',
      data: [{
        key: '1',
        name: '张三',
        age: 18,
        address: '杭州'
      },
      {
        key: '2',
        name: '李四',
        age: 25,
        address: '杭州'
      },
      {
        key: '3',
        name: '王五',
        age: 19,
        address: '杭州'
      },
      {
        key: '4',
        name: '老刘',
        age: 19,
        address: '杭州'
      },]
    })
  })
  
  app.post('/submitForm',(req,res) => {
    res.send({
      status: 200,
      message: '成功了'
    })
  })
  
  app.get('/menus',(req,res) => {
    res.send([{
      path: '/table',
      name: 'table',
      key: 'tableComponent'
    },{
      path: '/todo',
      name: 'todoList',
      key: 'todoComponent'
    },{
      path: '/form',
      name: 'form',
      key: 'formComponent'
    },{
      path: '/detail',
      name: 'detail',
      key: 'detailComponent',
      children: [{
        path: '/button',
        name: 'button',
        key: 'detail_button',
      },{
        path: '/icon',
        name: 'icon',
        key: 'detail_icon',
      }]
    }])
  })
}

module.exports = mock
import React from 'react';
import { Col, Row } from 'antd';
import AddTodo from './containers/addTodo'
import Filter from './containers/filter'
import TodoList from './containers/todo'

class App extends React.Component {

  render(){
    return (
      <>
        <Row>
          <Col span={4}>
            <AddTodo />
          </Col>
          <Col span={4} offset={4}>
            <Filter />
          </Col>
        </Row>
        <TodoList />
      </>
    )
  }
}

export default App;
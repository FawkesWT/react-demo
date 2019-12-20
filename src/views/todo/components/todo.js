import React from 'react';
import { List } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeType = this.changeType.bind(this);
    this.subItem = this.subItem.bind(this);
  }

  changeType(id){
    this.props.toggleTodo(id)
  }

  subItem(item){
    return <List.Item style={{textDecoration: item.completed? 'none' : 'line-through'}} onClick={() => this.changeType(item.id)}>{item.text}</List.Item>
  }

  render(){
    return (
      <>
        <List
          size="small"
          bordered
          dataSource={this.props.todos}
          renderItem={this.subItem}
        />
      </>
    )
  }
}

export default App;
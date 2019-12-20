import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
let idIndex = 1002;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'adad'
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addNewItem(){
    this.props.addTodo(idIndex,this.state.value)
    this.setState({
      value: ''
    })
    idIndex++
  }
  onChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <Search
        placeholder="input todo text"
        enterButton="添加"
        size="default"
        value={this.state.value}
        onSearch={this.addNewItem}
        onChange={this.onChange}
      />
    )
  }
}

export default App;
import React from 'react';
import { Table } from 'antd';

class App extends React.Component {
  
  componentDidMount(){
    this.props.upDataTable()
  }
  
  render(){
    return (
      <>
        <Table columns={this.props.columns} dataSource={this.props.data} pagination={false} />
      </>
    )
  }
}

export default App;
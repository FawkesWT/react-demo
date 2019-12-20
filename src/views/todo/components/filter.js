import React from 'react';
import { Radio } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showType = this.showType.bind(this);
  }

  showType(e){
    this.props.visibilityFilter(e.target.value)
  }

  render(){
    return (
      <Radio.Group onChange={this.showType} value={this.props.filter}>
        <Radio.Button value="SHOW_ALL">全部</Radio.Button>
        <Radio.Button value="SHOW_KILL">杀死的</Radio.Button>
        <Radio.Button value="SHOW_ACTIVE">存活的</Radio.Button>
      </Radio.Group>
    )
  }
}

export default App;
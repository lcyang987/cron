
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Input, Divider } from 'antd';

class ComponentsContent extends Component {
  static propTypes = {
    tabs: ImmutablePropTypes.list.isRequired,
    transData: PropTypes.func.isRequired,
    result: PropTypes.string.isRequired,
  }
  render() {
    return (<div style={{ margin: 20 }}>{
      this.props.tabs.map((item, index) => <div key={index} style={{ display: 'inline-block', marginRight: 6 }}>
        <div style={{ textAlign: 'center' }}>{item.get('name')}</div>
        <Input type='text' readOnly value={this.props.transData(item)} />
      </div>)}
    <Divider/>
    <Input type='text' readOnly value={this.props.result} />
    </div>);
  }
}

export default ComponentsContent;
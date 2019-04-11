import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Second from '@/containers/Tabs/Second';
import Minute from '@/containers/Tabs/Minute';
import Hour from '@/containers/Tabs/Hour';
import Date from '@/containers/Tabs/Date';
import Month from '@/containers/Tabs/Month';
import Week from '@/containers/Tabs/Week';
import Year from '@/containers/Tabs/Year';

class ComponentsTabs extends Component {
  static components = {
    Second,
    Minute,
    Hour,
    Date,
    Month,
    Week,
    Year,
  }
  static propTypes = {
    tabs: ImmutablePropTypes.list.isRequired,
    set: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
  }
  tab(item) {
    return (
      item.icon ?
        <span><Icon type={item.icon}/><span>{item.name}</span></span> :
        <span>{item.name}</span>
    );
  }
  customComponent(item, index) {
    const name = item.path.charAt(0).toUpperCase() + item.path.substring(1);
    const SpecificComponent = ComponentsTabs.components[name];
    return SpecificComponent ?
      <SpecificComponent tabs={this.props.tabs} path={item.path} name={item.name} select={item.select} index={index} contentSet={this.props.set} tabsSelect={this.props.select} /> :
      <h3>404</h3>;
  }
  tabPane() {
    return (
      this.props.tabs.toJS().map((item, index) => (
        <Tabs.TabPane
          key={index}
          tab={this.tab(item)}
          closable={false}
          style={{ height: 370, overflow: 'auto' }}
        >
          {
            this.customComponent(item, index)
          }
        </Tabs.TabPane>
      ))
    );
  }
  render() {
    return (
      <Tabs
        hideAdd
        type="editable-card"
        style={{ background: 'white' }}
        tabBarStyle={{ marginBottom: 0, background: '#f0f2f5' }}
      >
        {
          this.tabPane()
        }
      </Tabs>
    );
  }
}

export default ComponentsTabs;
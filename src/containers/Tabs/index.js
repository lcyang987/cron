import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import Actions from '@/actions';
import Tabs from '@/components/Tabs';

class ContainersTabs extends BaseComponent {
  static propTypes = {
    tabs: ImmutablePropTypes.list.isRequired,
    set: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
  }
  render() {
    return <Tabs {...this.props} />;
  }
}

const mapStateToProps = state => ({
  tabs: state.getIn(['tabs', 'data']),
  second: state.getIn(['tabs', 'second']),
});

const {
  TABS,
  CONTENT,
} = Actions;

const mapDispatchToProps = {
  select: TABS.select,
  set: CONTENT.set,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersTabs);
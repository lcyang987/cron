import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Actions from '@/actions';
import Index from '@/components/Tabs/Month';

class ContainersMonth extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    select: PropTypes.string.isRequired,
    contentSet: PropTypes.func.isRequired,
    tabsSelect: PropTypes.func.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    rangeMin: PropTypes.func.isRequired,
    rangeMax: PropTypes.func.isRequired,
    stepBegin: PropTypes.func.isRequired,
    stepNum: PropTypes.func.isRequired,
    enumeration: PropTypes.func.isRequired,
  }
  set(data) {
    this.props.tabsSelect({ index: data.index, select: data.value });
    this.props.contentSet({ path: data.path, value: data.value });
  }
  render() {
    return <Index {...this.props} set={this.set.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  data: state.getIn(['tabs', 'month']),
});

const {
  MONTH: method,
} = Actions;

const mapDispatchToProps = {
  rangeMin: method.rangeMin,
  rangeMax: method.rangeMax,
  stepBegin: method.stepBegin,
  stepNum: method.stepNum,
  enumeration: method.enumeration,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersMonth);
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Actions from '@/actions';
import Index from '@/components/Tabs/Week';

class ContainersWeek extends React.Component {
  static propTypes = {
    tabs: ImmutablePropTypes.list.isRequired,
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
    specialWeek: PropTypes.func.isRequired,
    specialDay: PropTypes.func.isRequired,
    lastWeekDay: PropTypes.func.isRequired,
  }
  transDay(index) {
    const day = ['日', '一', '二', '三', '四', '五', '六'];
    return this.props.name + day[index];
  }
  set(data) {
    this.props.tabsSelect({ index: data.index, select: data.value });
    this.props.contentSet({ path: data.path, value: data.value });
    if (data.value !== 'none') {
      const target = 'date';
      this.props.tabsSelect({ index: this.props.tabs.findIndex(t => t.get('path') === target), select: 'none' });
      this.props.contentSet({ path: target, value: 'none' });
    }
  }
  render() {
    return <Index {...this.props} transDay={this.transDay.bind(this)} set={this.set.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  data: state.getIn(['tabs', 'week']),
});

const {
  WEEK: method,
} = Actions;

const mapDispatchToProps = {
  rangeMin: method.rangeMin,
  rangeMax: method.rangeMax,
  stepBegin: method.stepBegin,
  stepNum: method.stepNum,
  enumeration: method.enumeration,
  specialWeek: method.specialWeek,
  specialDay: method.specialDay,
  lastWeekDay: method.lastWeekDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersWeek);
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import Actions from '@/actions';
import Index from '@/components/Content';

class ContainersContent extends BaseComponent {
  static propTypes = {
    allData: ImmutablePropTypes.map.isRequired,
    tabs: ImmutablePropTypes.list.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    set: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.tabs.forEach(item => {
      this.props.set({ path: item.get('path'), value: item.get('select') });
    });
  }
  result = ''
  componentWillUpdate() {
    setTimeout(() => {
      if (this.result !== this.props.result)
        this.props.setResult(this.result);
    }, 0);
  }
  transData(item) {
    const path = item.get('path');
    const value = this.props.data.get(path);
    const data = this.props.allData.get(path);
    var str = '';
    if (/^all$|^none$|^last$|^lastWork$/.test(value)) {
      str = data.get(value);
    } else if (value === 'range') {
      str = `${data.getIn(['range', 'min'])}-${data.getIn(['range', 'max'])}`;
    } else if (value === 'step') {
      str = `${data.getIn(['step', 'begin'])}/${data.getIn(['step', 'num'])}`;
    } else if (value === 'enumeration') {
      const addNum = /^date$|^month$|^week$/.test(path) ? 1 : 0;
      str = data.get('enumeration').reduce((p, n, i) => (n ? [...p, i + addNum] : p), []).join(',');
    } else if (value === 'work') {
      str = `${data.get('work')}W`;
    } else if (value === 'special') {
      str = `${data.getIn(['special', 'week'])}#${data.getIn(['special', 'day'])}`;
    } else if (value === 'lastWeekDay') {
      str = `${data.get('lastWeekDay')}L`;
    }
    if (path === 'second') {
      this.result = str;
    } else {
      if (path === 'year') {
        if (str) {
          this.result += ' ' + str;
        }
      } else {
        this.result += ' ' + str;
      }
    }
    return str;
  }
  render() {
    return <Index {...this.props} transData={this.transData.bind(this)}/>;
  }
}

const mapStateToProps = state => ({
  allData: state.get('tabs'),
  tabs: state.getIn(['tabs', 'data']),
  data: state.getIn(['content', 'data']),
  result: state.getIn(['content', 'result']),
});

const { CONTENT } = Actions;

const mapDispatchToProps = {
  set: CONTENT.set,
  setResult: CONTENT.setResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersContent);
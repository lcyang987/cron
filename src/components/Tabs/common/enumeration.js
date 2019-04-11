import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Radio, Checkbox } from 'antd';
import style from './index.module.css';

class ComponentsTabsCommonStep extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    stepBegin: PropTypes.func.isRequired,
    stepNum: PropTypes.func.isRequired,
    space: PropTypes.number,
    transDay: PropTypes.func,
  }
  render() {
    const addNum = /^date$|^month$/.test(this.props.path) ? 1 : 0;
    const isWeek = this.props.path === 'week';
    return (
      <React.Fragment>
        <Radio value={'enumeration'}></Radio>
        <div className={style.div}>
          {
            isWeek ?
              this.props.data.get('enumeration').map((bool, index) => <Checkbox onChange={() => this.props.enumeration({ index, bool: !bool })} checked={bool} key={index} className={style.checkbox_day}>{this.props.transDay(index)}</Checkbox>) :
              this.props.data.get('enumeration').map((bool, index) => index % this.props.space ?
                <Checkbox onChange={() => this.props.enumeration({ index, bool: !bool })} checked={bool} key={index} className={style.checkbox}>{index + addNum}</Checkbox> :
                <React.Fragment key={index}><div /><Checkbox onChange={() => this.props.enumeration({ index, bool: !bool })} checked={bool} className={style.checkbox}>{index + addNum}</Checkbox></React.Fragment>
              )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentsTabsCommonStep;
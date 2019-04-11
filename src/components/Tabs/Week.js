import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Radio, Divider, Input } from 'antd';
import style from './index.module.css';
import commonStyle from './common/index.module.css';
import Range from './common/range';
import Step from './common/step';
import Enumeration from './common/enumeration';

const RadioGroup = Radio.Group;

class ComponentsWeek extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    select: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    rangeMin: PropTypes.func.isRequired,
    rangeMax: PropTypes.func.isRequired,
    stepBegin: PropTypes.func.isRequired,
    stepNum: PropTypes.func.isRequired,
    enumeration: PropTypes.func.isRequired,
    specialWeek: PropTypes.func.isRequired,
    specialDay: PropTypes.func.isRequired,
    lastWeekDay: PropTypes.func.isRequired,
    transDay: PropTypes.func.isRequired,
  }
  render() {
    return (
      <RadioGroup value={this.props.select} onChange={item => this.props.set({index: this.props.index, path: this.props.path, value: item.target.value})}>
        <Divider className={style.divider} />
        <Radio value={'all'}>每{this.props.name}</Radio>
        <Divider className={style.divider} />
        <Radio value={'none'}>不指定</Radio>
        <Divider className={style.divider} />
        <Range {...this.props} />
        <Divider className={style.divider} />
        <Step {...this.props} />
        <Divider className={style.divider} />
        <Radio value={'special'}></Radio>
        <div className={commonStyle.div}>第
          <Input onChange={e => this.props.specialWeek(e.target.value)} value={this.props.data.getIn(['special', 'week'])} size={'small'} className={commonStyle.input} type={'number'} />的星期
          <Input onChange={e => this.props.specialDay(e.target.value)} value={this.props.data.getIn(['special', 'day'])} size={'small'} className={commonStyle.input} type={'number'} />
        </div>
        <Divider className={style.divider} />
        <Radio value={'lastWeekDay'}></Radio>
        <div className={commonStyle.div}>本月最后一个星期
          <Input onChange={e => this.props.lastWeekDay(e.target.value)} value={this.props.data.get('lastWeekDay')} size={'small'} className={commonStyle.input} type={'number'} />
        </div>
        <Divider className={style.divider} />
        <Enumeration {...this.props} />
      </RadioGroup>
    );
  }
}

export default ComponentsWeek;
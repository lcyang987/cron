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

class ComponentsDate extends Component {
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
        <Radio value={'work'}></Radio>
        <div className={commonStyle.div}>每月
          <Input onChange={e => this.props.work(e.target.value)} value={this.props.data.get('work')} size={'small'} className={commonStyle.input} type={'number'} />号最近的那个工作日
        </div>
        <Divider className={style.divider} />
        <Radio value={'last'}>本月最后一天</Radio>
        <Divider className={style.divider} />
        <Radio value={'lastWork'}>本月最后一个工作日</Radio>
        <Divider className={style.divider} />
        <Enumeration {...this.props} space={12} />
      </RadioGroup>
    );
  }
}

export default ComponentsDate;
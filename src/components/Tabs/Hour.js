import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Radio, Divider } from 'antd';
import style from './index.module.css';
import Range from './common/range';
import Step from './common/step';
import Enumeration from './common/enumeration';

const RadioGroup = Radio.Group;

class ComponentsHour extends Component {
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
        <Range {...this.props} />
        <Divider className={style.divider} />
        <Step {...this.props} />
        <Divider className={style.divider} />
        <Enumeration {...this.props} space={12} />
      </RadioGroup>
    );
  }
}

export default ComponentsHour;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Radio, Input } from 'antd';
import style from './index.module.css';

class ComponentsTabsCommonStep extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    stepBegin: PropTypes.func.isRequired,
    stepNum: PropTypes.func.isRequired,
  }
  render() {
    const isYear = /^year$/.test(this.props.path);
    return (
      <React.Fragment>
        <Radio value={'step'}></Radio>
        <div className={style.div}>从
          <Input onChange={e => this.props.stepBegin(e.target.value)} value={this.props.data.getIn(['step', 'begin'])} size={'small'} className={isYear ? style.input_year : style.input} type={'number'} />{this.props.name}开始，每
          <Input onChange={e => this.props.stepNum(e.target.value)} value={this.props.data.getIn(['step', 'num'])} size={'small'} className={isYear ? style.input_year : style.input} type={'number'} />{this.props.name}
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentsTabsCommonStep;
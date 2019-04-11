import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Radio, Input } from 'antd';
import style from './index.module.css';

class ComponentsTabsCommonRange extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    data: ImmutablePropTypes.map.isRequired,
    rangeMin: PropTypes.func.isRequired,
    rangeMax: PropTypes.func.isRequired,
  }
  render() {
    const isYear = /^year$/.test(this.props.path);
    return (
      <React.Fragment>
        <Radio value={'range'}></Radio>
        <div className={style.div}>周期从 
          <Input onChange={e => this.props.rangeMin(e.target.value)} value={this.props.data.getIn(['range', 'min'])} size={'small'} className={isYear ? style.input_year : style.input} type={'number'} />-
          <Input onChange={e => this.props.rangeMax(e.target.value)} value={this.props.data.getIn(['range', 'max'])} size={'small'} className={isYear ? style.input_year : style.input} type={'number'} />{this.props.name}
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentsTabsCommonRange;
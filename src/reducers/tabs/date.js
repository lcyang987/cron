import Immutable from 'immutable';
import Actions from '@/actions';

const actionTypes = Actions.DATE.action;

const initialState = Immutable.fromJS({
  all: '*',
  none: '?',
  range: {
    min: 1,
    max: 2,
  },
  work: '1',
  last: 'L',
  lastWork: 'LW',
  step: {
    begin: 1,
    num: 1,
  },
  enumeration: new Array(31).fill(false),
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.RANGE_MIN:
    const min = parseInt(action.value > state.get('enumeration').size - 1 ? state.get('enumeration').size - 1 : action.value < 1 ? 1 : action.value);
    const changeMax = state.getIn(['range', 'max']) <= min ? +min + 1 : state.getIn(['range', 'max']);
    return state
      .setIn(['range', 'min'], min)
      .setIn(['range', 'max'], changeMax);
  case actionTypes.RANGE_MAX:
    const max = parseInt(action.value > state.get('enumeration').size ? state.get('enumeration').size : action.value < 2 ? 2 : action.value);
    const changeMin = state.getIn(['range', 'min']) >= max ? +max - 1 : state.getIn(['range', 'min']);
    return state
      .setIn(['range', 'min'], changeMin)
      .setIn(['range', 'max'], max);
  case actionTypes.STEP_BEGIN:
    const begin = parseInt(action.value > state.get('enumeration').size - 1 ? state.get('enumeration').size - 1 : action.value < 1 ? 1 : action.value);
    const changeNum = +state.getIn(['step', 'num']) + begin > state.get('enumeration').size ? state.get('enumeration').size - begin : state.getIn(['step', 'num']);
    return state
      .setIn(['step', 'begin'], begin)
      .setIn(['step', 'num'], changeNum);
  case actionTypes.STEP_NUM:
    const num = parseInt(action.value > state.get('enumeration').size - 1 ? state.get('enumeration').size - 1 : action.value < 1 ? 1 : action.value);
    const changeBegin = +state.getIn(['step', 'begin']) + num > state.get('enumeration').size ? state.get('enumeration').size - num : state.getIn(['step', 'begin']);
    return state
      .setIn(['step', 'begin'], changeBegin)
      .setIn(['step', 'num'], num);
  case actionTypes.ENUMERATION:
    return state
      .setIn(['enumeration', action.params.index], action.params.bool);
  case actionTypes.WORK:
    const work = action.value > state.get('enumeration').size ? state.get('enumeration').size : action.value < 1 ? 1 : action.value;
    return state
      .set('work', work);
  default:
    return state;
  }
};
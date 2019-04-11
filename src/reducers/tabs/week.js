import Immutable from 'immutable';
import Actions from '@/actions';

const actionTypes = Actions.WEEK.action;

const initialState = Immutable.fromJS({
  all: '*',
  none: '?',
  range: {
    min: 1,
    max: 2,
  },
  step: {
    begin: 0,
    num: 1,
    max: 4,
  },
  special: {
    week: 1,
    day: 1,
  },
  lastWeekDay: 1,
  enumeration: new Array(7).fill(false),
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
    const begin = parseInt(action.value > state.getIn(['step', 'max']) ? state.getIn(['step', 'max']) : action.value < 1 ? 1 : action.value);
    const changeNum = +state.getIn(['step', 'num']) + begin > state.getIn(['step', 'max']) ? state.getIn(['step', 'max']) - begin : state.getIn(['step', 'num']);
    return state
      .setIn(['step', 'begin'], begin)
      .setIn(['step', 'num'], changeNum);
  case actionTypes.STEP_NUM:
    const num = parseInt(action.value > state.getIn(['step', 'max']) ? state.getIn(['step', 'max']) : action.value < 1 ? 1 : action.value);
    const changeBegin = +state.getIn(['step', 'begin']) + num > state.getIn(['step', 'max']) ? state.getIn(['step', 'max']) - num : state.getIn(['step', 'begin']);
    return state
      .setIn(['step', 'begin'], changeBegin)
      .setIn(['step', 'num'], num);
  case actionTypes.ENUMERATION:
    return state
      .setIn(['enumeration', action.params.index], action.params.bool);
  case actionTypes.SPECIAL_WEEK:
    const week = action.value > state.getIn(['step', 'max']) ? state.getIn(['step', 'max']) : action.value < 1 ? 1 : action.value;
    return state
      .setIn(['special', 'week'], week);
  case actionTypes.SPECIAL_DAY:
    const day = action.value > state.get('enumeration').size ? state.get('enumeration').size : action.value < 1 ? 1 : action.value;
    return state
      .setIn(['special', 'day'], day);
  case actionTypes.LAST_WEEK_DAY:
    const lastWeekDay = action.value > state.get('enumeration').size ? state.get('enumeration').size : action.value < 1 ? 1 : action.value;
    return state
      .set('lastWeekDay', lastWeekDay);
  default:
    return state;
  }
};
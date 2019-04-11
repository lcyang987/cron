import Immutable from 'immutable';
import Actions from '@/actions';

const actionTypes = Actions.YEAR.action;

const year = new Date().getFullYear();

const initialState = Immutable.fromJS({
  all: '*',
  none: '',
  range: {
    min: year,
    max: year + 10,
    lastYear: 3000,
  },
  step: {
    begin: year,
    num: 1,
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.RANGE_MIN:
    const min = parseInt(action.value < year ? year : action.value > state.getIn(['range', 'lastYear']) - 1 ? state.getIn(['range', 'lastYear']) - 1 : action.value);
    const changeMax = state.getIn(['range', 'max']) <= min ? +min + 1 : state.getIn(['range', 'max']);
    return state
      .setIn(['range', 'min'], min)
      .setIn(['range', 'max'], changeMax);
  case actionTypes.RANGE_MAX:
    const max = parseInt(action.value < year + 1 ? year + 1 : action.value > state.getIn(['range', 'lastYear']) ? state.getIn(['range', 'lastYear']) : action.value);
    const changeMin = state.getIn(['range', 'min']) >= max ? +max - 1 : state.getIn(['range', 'min']);
    return state
      .setIn(['range', 'min'], changeMin)
      .setIn(['range', 'max'], max);
  case actionTypes.STEP_BEGIN:
    const begin = parseInt(action.value < year ? year : action.value);
    return state
      .setIn(['step', 'begin'], begin);
  case actionTypes.STEP_NUM:
    const num = parseInt(action.value > 100 ? 100 : action.value);
    return state
      .setIn(['step', 'num'], num);
  default:
    return state;
  }
};
const THISACTION = 'MONTH' + '_SET_';

const action = {
  RANGE_MIN: THISACTION + 'RANGE_MIN',
  RANGE_MAX: THISACTION + 'RANGE_MAX',
  STEP_BEGIN: THISACTION + 'STEP_BEGIN',
  STEP_NUM: THISACTION + 'STEP_NUM',
};

const rangeMin = value => dispatch => dispatch({
  type: action.RANGE_MIN,
  value,
});

const rangeMax = value => dispatch => dispatch({
  type: action.RANGE_MAX,
  value,
});

const stepBegin = value => dispatch => dispatch({
  type: action.STEP_BEGIN,
  value,
});

const stepNum = value => dispatch => dispatch({
  type: action.STEP_NUM,
  value,
});

export default {
  action, // 以下为修改数据
  rangeMin,
  rangeMax,
  stepBegin,
  stepNum,
};
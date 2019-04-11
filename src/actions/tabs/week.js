const THISACTION = 'WEEK' + '_SET_';

const action = {
  RANGE_MIN: THISACTION + 'RANGE_MIN',
  RANGE_MAX: THISACTION + 'RANGE_MAX',
  STEP_BEGIN: THISACTION + 'STEP_BEGIN',
  STEP_NUM: THISACTION + 'STEP_NUM',
  ENUMERATION: THISACTION + 'ENUMERATION',
  SPECIAL_WEEK: THISACTION + 'SPECIAL_WEEK',
  SPECIAL_DAY: THISACTION + 'SPECIAL_DAY',
  LAST_WEEK_DAY: THISACTION + 'LAST_WEEK_DAY',
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

const enumeration = params => dispatch => dispatch({
  type: action.ENUMERATION,
  params,
});

const specialWeek = value => dispatch => dispatch({
  type: action.SPECIAL_WEEK,
  value,
});

const specialDay = value => dispatch => dispatch({
  type: action.SPECIAL_DAY,
  value,
});

const lastWeekDay = value => dispatch => dispatch({
  type: action.LAST_WEEK_DAY,
  value,
});

export default {
  action, // 以下为修改数据
  rangeMin,
  rangeMax,
  stepBegin,
  stepNum,
  enumeration,
  specialWeek,
  specialDay,
  lastWeekDay,
};
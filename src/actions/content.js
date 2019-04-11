const THISACTION = 'CONTENT' + '_';

const action = {
  SET: THISACTION + 'SET',
  SET_RESULT: THISACTION + 'SET_RESULT',
};

const set = params => dispatch => dispatch({
  type: action.SET,
  params,
});

const setResult = value => dispatch => dispatch({
  type: action.SET_RESULT,
  value,
});

export default {
  action, // 以下为修改数据
  set,
  setResult,
};
import Immutable from 'immutable';
import Actions from '@/actions';

const actionTypes = Actions.CONTENT.action;

const initialState = Immutable.fromJS({
  data: {
    second: '',
    minute: '',
    hour: '',
    date: '',
    month: '',
    week: '',
    year: '',
  },
  result: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET:
    return state
      .setIn(['data', action.params.path], action.params.value);
  case actionTypes.SET_RESULT:
    return state
      .set('result', action.value);
  default:
    return state;
  }
};
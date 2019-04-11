import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import second from './second';
import minute from './minute';
import hour from './hour';
import date from './date';
import month from './month';
import week from './week';
import year from './year';

import Actions from '@/actions';

const actionTypes = Actions.TABS.action;

const initialState = Immutable.fromJS([{
  path: 'second',
  name: '秒',
  select: 'all',
}, {
  path: 'minute',
  name: '分钟',
  select: 'all',
}, {
  path: 'hour',
  name: '小时',
  select: 'all',
}, {
  path: 'date',
  name: '日',
  select: 'all',
}, {
  path: 'month',
  name: '月',
  select: 'all',
}, {
  path: 'week',
  name: '周',
  select: 'none',
}, {
  path: 'year',
  name: '年',
  select: 'none',
}]);

const data = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SELECT:
    return state
      .setIn([action.params.index, 'select'], action.params.select);
  default:
    return state;
  }
};

export default combineReducers({
  data,
  second,
  minute,
  hour,
  date,
  month,
  week,
  year,
});
import { combineReducers } from 'redux-immutable';
import tabs from './tabs';
import content from './content';

export default combineReducers({
  tabs,
  content,
});

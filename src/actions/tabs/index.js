const THISACTION = 'TABS' + '_SET_';

import SECOND from './second';
import MINUTE from './minute';
import HOUR from './hour';
import DATE from './date';
import MONTH from './month';
import WEEK from './week';
import YEAR from './year';

const action = {
  SELECT: THISACTION + 'SELECT',
};

const select = params => dispatch => dispatch({
  type: action.SELECT,
  params,
});

export default {
  TABS: {
    action,
    select,
  },
  SECOND,
  MINUTE,
  HOUR,
  DATE,
  MONTH,
  WEEK,
  YEAR,
};
import { combineReducers } from 'redux';

import nav from './nav';
import todosReducer from './todos';

const appReducer = combineReducers({
  nav: nav,
  todosReducer: todosReducer
});

export default appReducer;
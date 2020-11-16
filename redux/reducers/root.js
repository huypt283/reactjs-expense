import { combineReducers } from 'redux';
import user from './user.reducer';
import transactions from './transactions.reducer';

const rootReducer = combineReducers({
  user,
  transactions,
});

export default rootReducer;

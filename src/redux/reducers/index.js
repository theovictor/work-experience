import { combineReducers } from 'redux';
import professinalReducer from './professinalReducer';
import companieReducer from './companieReducer';

export default combineReducers({
  professinalReducer,
  companieReducer,
})

import { combineReducers } from 'redux';
import users from './users';
import homeScreen from './homeScreen';

export default combineReducers({
  users,
  homeScreen
})

import { combineReducers, Reducer } from 'redux';
import homescreenReducer from './reducers/homescreen';

const rootReducer = combineReducers({
  homescreen: homescreenReducer,
});

export default rootReducer;

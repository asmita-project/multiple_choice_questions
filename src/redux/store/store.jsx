import { createStore, combineReducers } from 'redux';
import UserReducer from '../reducer/reducer';

const rootReducer = combineReducers({
   UserReducer
  });
  
  const store = createStore(rootReducer);
  
  export default store;
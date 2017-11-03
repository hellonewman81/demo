import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const hcardApp = combineReducers({
  form: formReducer,
  app
});

export default hcardApp;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from './login/reducer';
import registerReducer from './register/reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers(
    {
      login: loginReducer,
      register: registerReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

/* eslint-disable import/no-anonymous-default-export */
import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case actions.LOGIN_SUCCESS:
      return {
        LoggedIn: true,
        user: action.user,
      };
    case actions.LOGIN_FAILURE:
      return {};
    case actions.LOGOUT:
      return {};
    default:
      return state;
  }
};

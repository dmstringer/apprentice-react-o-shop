/* eslint-disable import/no-anonymous-default-export */
import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        registering: true,
        user: action.user,
      };
    case actions.REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user,
      };
    case actions.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};

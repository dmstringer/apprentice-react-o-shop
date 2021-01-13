import actionTypes from '../../store/login/actionTypes';
import { userService } from '../../services/userService';
import history from '../../utils/history';

export const loginActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, user: { username } });

    userService.login(username, password).then(
      (user) => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        console.log(error);
        dispatch({ type: actionTypes.LOGIN_FAILURE, error });
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}

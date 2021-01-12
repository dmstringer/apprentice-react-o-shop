import actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import history from '../../utils/history';

export const registerActions = {
  register,
};

function register(user) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: user.username });

    userService.register(user).then(
      (user) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        console.log(error);
        dispatch({ type: actionTypes.REGISTER_FAILURE, error });
      }
    );
  };
}

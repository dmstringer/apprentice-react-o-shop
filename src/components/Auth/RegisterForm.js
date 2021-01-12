import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { registerActions } from '../../store/register/actions';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const inputsEmpty = Object.values(inputs).every(
    (x) => x === null || x === ''
  );

  const placeHolders = ['First Name', 'Last Name', 'Username', 'Password'];

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registerActions.logout());
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    if (!inputsEmpty) {
      dispatch(registerActions.register(inputs));
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  let inputsList = placeHolders.map(function (placeHolder, index) {
    return (
      <div classname="form-group">
        <input
          type="text"
          name={Object.keys(inputs)[index]}
          placeholder={placeHolder}
          value={Object.values(inputs)[index]}
          onChange={onChange}
          className={
            'form-control' +
            (submitted && !Object.values(inputs)[index] ? ' is-invalid' : '')
          }
        />
        {submitted && !Object.values(inputs)[index] && (
          <div className="invalid-feedback">{placeHolder} is required</div>
        )}
      </div>
    );
  });

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Register</h2>
      <form name="form" onSubmit={onSubmit}>
        {inputsList}

        <div className="form-group">
          <button className="btn btn-primary">Register</button>
          <Link to="/login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

import React, { useState } from 'react';
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

  const { firstName, lastName, username, password } = inputs;

  const placeHolders = ['First Name', 'Last Name', 'Username', 'Password'];

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    if (firstName && lastName && username && password) {
      dispatch(registerActions.register(inputs));
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  let inputsList = placeHolders.map(function (placeHolder, index) {
    return (
      <div className="form-group" key={placeHolder + 'div'}>
        <input
          type="text"
          name={Object.keys(inputs)[index]}
          placeholder={placeHolder}
          value={Object.values(inputs)[index]}
          key={placeHolder}
          onChange={onChange}
          className={
            'form-control' +
            (submitted && !Object.values(inputs)[index] ? ' is-invalid' : '')
          }
        />
        {submitted && !Object.values(inputs)[index] && (
          <div className="invalid-feedback" key={index}>
            {placeHolder} is required
          </div>
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

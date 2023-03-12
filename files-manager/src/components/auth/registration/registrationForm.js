import React, { useState } from 'react';
import './style.css';
import Header from './header';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';

    if (!name) {
      nameError = 'Name is required';
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Invalid email';
    }

    if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
    }

    if (confirmPassword !== password) {
      confirmPasswordError = 'Passwords do not match';
    }

    setNameError(nameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);

    return !nameError && !emailError && !passwordError && !confirmPasswordError;
  };

  const handleSubmit = (e) => {
    const isValid = validate();

    if (isValid) {
      console.log(name, email, password, confirmPassword);
    }
  };

  return (
    <div className="Header">
      <Header />
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => handleInputChange(e)}
              placeholder="UserName"
              maxLength={32}
              required
              
            />
            <div className="error">{nameError}</div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
              required
            />
            <div className="error">{emailError}</div>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
              required
            />
            <div className="error">{passwordError}</div>
          </div>

          <div className="confirm-password">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control rounded-0"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
              required/>
             <div className="error">{confirmPasswordError}</div>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
        </div>
    )       
}

export default RegistrationForm
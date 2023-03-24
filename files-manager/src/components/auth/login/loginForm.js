import React, { useState } from 'react';
import './style.css';
import Header from './header';
import axiosClient from '../../../axios';
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = () => {
    let emailError = '';
    let passwordError = '';

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Invalid email';
    }

    if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
    }


    setEmailError(emailError);
    setPasswordError(passwordError);

    return !emailError && !passwordError
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const isValid = validate();

    if (isValid) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      axiosClient.post("/login", formData)
        .then((response) => {
          const token = response.data.token;
          const type = response.data.type;

          localStorage.setItem("ACCESS_TOKEN", token);
          localStorage.setItem('userType', type);
          navigate("/home");
        })
        .catch((error) => {
          alert("fail");
          console.log(error);
        });
      console.log(email, password);
    }
    
  };


  return (
    <div className="Login">
    <div className="Header">
      <Header />
      <div className="form" >
        <div className="form-body">
          
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

            </div>
              <div class="col-mb-6 mb-3">
                 <div class="form-group">
                    <p class="text-center">
                      Don't have account?{" "}
                      <a href="/registration">
                       Sign up here
                       </a>
                       </p></div></div>


            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Log In</button>
            </div>
        </div>
        </div>
        </div>
    )       
}

export default LoginForm
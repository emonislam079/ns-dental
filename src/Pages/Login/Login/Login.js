import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  const { signInUsingGoogle } = useAuth();

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
      
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        history.push(location.state?.from||'/home');
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        history.push(location.state?.from||'/home');
        setError('');
        verifyEmail();
        setUserName();
        setName('');
        setEmail('');
        setPassword('')
      })
      .catch(error => {
        setError(error.message);
      })
  }
 
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }
  const history= useHistory();
  const location= useLocation();

  const handleGoogleLogIn = () =>{
    signInUsingGoogle()
    .then(result =>{
      history.push(location.state?.from||'/home');
    })
  }

    return (
        <div className="mx-auto mt-5 p-3 text-start w-50 border border-secondary">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary text-center">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <h1>-------------or--------------</h1>
      <div className="align-center">
      <button onClick={handleGoogleLogIn} className="btn btn-primary">Google Sign In</button>
    </div>
    </div>
    //     
    );
};

export default Login;
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import '../Login.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { Button, Avatar } from '@material-ui/core';
import firebase from '../firebase';
import { useStateValue } from '../StateProvider';
toast.configure();
function Login() {
  const [name, setName] = useState('');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // !firebase login
  const signIn = (e) => {
    e.preventDefault();

    if (email) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          // console.log('this is auth = ', auth.user.uid);
          if (auth) {
            // !toast component
            toast.success(`Enjoy your course ${name}`, {
              position: 'top-left',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            history.push('/course');
          }
        })
        .catch((e) => alert(e.message));
    } else {
      alert('complete your form');
    }
  };

  // !Send emails And
  function register(e) {
    e.preventDefault();

    if (email) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // console.log(auth);
          if (auth) {
            // !this is email service temp stop
            emailjs.sendForm('gmail', 'demo_template', e.target, 'user_BAYdYkmVjbbwuLRJhPVLO').then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );

            // !toast component
            toast.success(`Enjoy your course ${name}`, {
              position: 'top-left',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            history.push('/course');
          }
        })
        .catch((e) => alert(e.message));
    } else {
      alert('complete your form');
    }
  }

  //! Google authenticatio
  const handleGoogleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('this is from login', result);
        history.push('/course');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ display: 'block', textAlign: 'center', marginTop: '5rem' }}>
        <Link to="/course">
          <img className="login__logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="" />
        </Link>
      </h1>
      <div>
        <form onSubmit={register} style={{ width: '70vw', margin: '0px auto' }}>
          <div className="my-5 mx-5">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="buttons" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div className="mb-3 " style={{ margin: '0px 10px' }}>
                <button class="btn btn-outline-secondary" onClick={signIn}>
                  Sign in
                </button>
              </div>

              <div className="mb-3 " style={{ margin: '0px 10px' }}>
                <button type="submit" class="btn btn-outline-danger">
                  Register
                </button>
              </div>

              <div className="mb-3 " style={{ margin: '0px 10px' }}>
                <Button variant="outlined" onClick={handleGoogleAuth}>
                  Sign with Google
                </Button>
              </div>
            </div>
          </div>
        </form>
        <p style={{ width: '60vw', margin: '0px auto', color: 'gray' }}>This section of terms and conditions agreement lays out the terms under which users are permitted to utilize the site. 2.1 In order to use the Service, you must firstly agree to the terms. You may not use the Service if you do not accept the terms. 2.2 You can accept the terms by simply using the Service.</p>
      </div>
    </div>
  );
}

export default Login;
{
  /* <Form /> */
}
// User ID
// user_BAYdYkmVjbbwuLRJhPVLO gmail , demo_template
// from :  yashalekar21@gmail.com

// to : suyashalekar519@gmail.com

//!firebase register
// const register = (e) => {
//   e.preventDefault();
//   // alert(`${email}   and ${password}`);
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((auth) => {
//       console.log(auth);
//       if (auth) {
//         history.push('/course');
//       }
//     })
//     .catch((e) => alert(e.message));
// };

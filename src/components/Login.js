import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { push } = useHistory();
    const [cred, setCred] = useState({
        username:'',
        password:''
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                push('/friends');
            })
            .catch(err => {
                console.error({err});
            });
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={handleChange} name='username' id='username'/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} name='password' type='password' id='password'/>
          </div>
          <button>Submit</button>
        </form>
      </div>)
  }

  export default Login;
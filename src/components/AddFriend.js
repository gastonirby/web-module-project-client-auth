import React, { useState } from 'react';
import axios from 'axios';

const AddFriend = () => {
    const [form, setForm] = useState({
        name:'',
        age:'',
        email:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error({err})
            })
    }
    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={handleChange} name='name' id='username'/>
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input onChange={handleChange} name='age' id='age'/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={handleChange} name='email' id='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>)
  }

export default AddFriend;
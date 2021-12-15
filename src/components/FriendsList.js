import React,  { useState, useEffect } from 'react';
import axios from 'axios';

const FriendsList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect (() => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res.data.payload)
                setFriends(res.data);        
            })
            .catch(err=>{
                console.error({err});
            });
    }, []);

    return (
    <div>
      <h2>FriendsList</h2>
      <ul>
          {
              friends.map(friend => {
                  return <li>{friend.name} - {friend.age} - {friend.username}</li>
              })
          }
      </ul>
    </div>)
  }

  export default FriendsList;
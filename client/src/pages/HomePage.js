import {React, useEffect} from 'react';
import axios from 'axios';

const HomePage = () => {
  //login user data
  const getUserData = async() => {
    try{
      const res = await axios.post('/api/v1/user/getUserData',{},{
        headers:{
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    getUserData();
  }
  ,[]);

  return (
    <div>HomePage</div>
  )
}

export default HomePage
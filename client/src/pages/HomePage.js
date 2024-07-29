import {React, useEffect} from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

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
    <Layout>
      <div>HomePage</div>
    </Layout>
  );
}

export default HomePage
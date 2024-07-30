import React from 'react';
import Layout from '../components/Layout';
import { message, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import {showLoading, hideLoading} from '../redux/features/alertSlice';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotificationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const markAll = async()=>{
    try{
      dispatch(showLoading());
      const res = await axios.post('/api/v1/user/get-all-notifications',
        {
          userId: user._id
        },
        {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      dispatch(hideLoading());
      if(res.data.success){
        message.success(res.data.success);
      }
      else{
        message.error(res.data.message);
      } 

    }
    catch(err){
      dispatch(hideLoading());
      console.log(err)
    }
  };
  const deleteAll = async()=>{};

  
  return (
    <Layout>
      <h3 className="text-center">Notifications Page</h3>
      <Tabs>
        <Tabs.TabPane tab="Unread" key={0}>
          <div className="d-flex justify-content-end">
            <h4 onClick={markAll}>Mark all as read</h4>
          </div>
          {user?.notification.map((notificationMgs) => (
            <div className='card' onClick={navigate(notificationMgs.onClickPath)} style={{cursor:'pointer'}}>
              <div className='card-text'>
                {notificationMgs.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h4 onClick={deleteAll}>Delete all</h4>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
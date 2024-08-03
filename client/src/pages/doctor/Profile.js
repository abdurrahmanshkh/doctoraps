import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {user} = useSelector((state) => state.user);
    const [doctor, setDoctor] = useState(null);
    const params = useParams();

    const getDoctorInfo = async()=>{
        try {
            const res = await axios.post('/api/v1/doctor/getDoctorInfo', {
                userId: params.id
            },{
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if(res.data.success){
                setDoctor(res.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDoctorInfo();
        //eslint-disable-next-line
    }, []);

    return (
        <Layout>
        <h3 className='text-center'>Doctor Profile</h3>
            <hr />
        </Layout>
    );
};

export default Profile;
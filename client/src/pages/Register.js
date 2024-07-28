import React from 'react';
import { Form, Input,} from 'antd';
import "../styles/register.css";
import {Link } from 'react-router-dom';

const Register = () => {
    const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className='form'>
          <h3>Registration Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" id="name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" id="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" id="password" />
          </Form.Item>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
          <Link className='link' to="/login">
            Already have an account? Login
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Register
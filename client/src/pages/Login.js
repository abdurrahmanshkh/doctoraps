import React from "react";
import { Form, Input } from "antd";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="form">
          <h3>Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" id="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" id="password" />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <Link className="link" to="/register">
            Don't have an account? Register
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/v1/user/login", values);
      console.log(response);
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-400 card p-3">
        <h1 className="text-xl text-center">Hop On! - Login</h1>
        <hr />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input type="email"></input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password"></input>
          </Form.Item>
          <div className="d-flex justify-content-between align-item-center">
            <Link to="/signup">Click Here To Signup</Link>
            <button className="secondary-btn" type="submit">
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-400 card p-3">
        <h1 className="text-xl text-center">Hop On! - Login</h1>
        <hr />
        <Form layout="vertical">
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

import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-400 card p-3">
        <h1 className="text-xl text-center">Hop On! - Signup</h1>
        <hr />
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <input type="text"></input>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email"></input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password"></input>
          </Form.Item>
          <div className="d-flex justify-content-between align-item-center">
            <Link to="/login">Click Here To Login</Link>
            <button className="secondary-btn" type="submit">
              Signup
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;

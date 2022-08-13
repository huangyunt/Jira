import { useAuth } from "context/auth-context";
import React from "react";
import { Button, Form, Input } from "antd";

export const RegisterScreen = () => {
  const { user, register } = useAuth();

  const handleSubmit = (value: {
    username: string;
    password: string;
  }) => {
    register(value);
  };
  return (
    <Form action="" onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          placeholder="用户名"
          type="text"
          id="username"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          placeholder="密码"
          type="password"
          id="password"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

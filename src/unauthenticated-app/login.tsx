import { useAuth } from "context/auth-context";
import React from "react";
import { Button, Form, Input } from "antd";

export const LoginScreen = () => {
  const { user, login } = useAuth();

  const handleSubmit = (value: {
    username: string;
    password: string;
  }) => {
    login(value);
  };
  return (
    <Form action="" onFinish={handleSubmit}>
      {user ? (
        <div>登录成功，用户名：{user.name}</div>
      ) : null}
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
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

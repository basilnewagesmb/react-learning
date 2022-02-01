import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useDispatch } from 'react-redux';
import {signUpUser} from 'features/auth/authSlice';
;

function SingUp() {
  const dispatch =useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const upendData={ user: true, token: "56ds4g6g4g4d6fgds", name: values.username, password: values.password , email: values.email }
    dispatch(signUpUser(upendData));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content className="login">
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
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
              <Input.Password />
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
}

export default SingUp;

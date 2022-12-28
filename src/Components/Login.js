import { Button, Checkbox, Form, Input,Select } from 'antd';
import React, { Component } from 'react';


class Login extends Component {
   onFinish = (values) => {
    console.log('Success:', values);
  };
   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   myStyle= {
    position: "center",
    top: "300px",
    right: "420px",
    width: "300px",
    padding: "10px"
};

render() { 
        return (
          <Form style={this.myStyle}
            name="Login"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Job Role"
                        name="Job Role"
                        rules={[
                          {
                            required: true,
                            message: 'Please select your Job Role',
                          },
                          
                          ]}>
                            <Select>
                              <Select.Option value="Student">Student</Select.Option>
                              <Select.Option value="Teacher">Teacher</Select.Option>
                            </Select>
                          </Form.Item>
            <Form.Item
              label="NIC"
              name="NIC"
              rules={[
                {
                  required: true,
                  message: 'Please input your NIC!',
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
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
      
            </Form.Item>
          </Form>
        );
      };
}
export default Login;
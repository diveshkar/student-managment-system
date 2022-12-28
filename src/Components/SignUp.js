import React, {Component}from "react";
import { Form , Select , Input , Button,} from "antd";



class SignUp extends Component {
  state = {
    role: ''
  }
  onChange= (value) => {
    this.setState({role: value})

  };
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    
  };
  validateMessages = {
    required: '${name} is required',
    types: {
      email: '${label} is not a valid email!',
      password: '${label} is not a valid Password!',
    },
    number: {
      len: '${label} must equal ${len}',
    },
    };
    onFinish = (values) => {
      console.log('Success:', values);
    };
  
    render() {
        return(
            
                    <Form
                    {...this.layout}
                    name="Registraion"
                     initialValues={{
                       remember: true,
                     }}
                     onFinish={this.onFinish}
                     
                    validateMessages={this.validateMessages}
                     >
                      <h1>SMS Registraion</h1>
                            <Form.Item
                            label="First Name"
                            name={['user', 'First Name']}
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <input />
                            </Form.Item>
                            <Form.Item
                            label="Last Name"
                            name={['user', 'Last Name']}
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <input />
                            </Form.Item>
                            <Form.Item
                            label="NIC No"
                            name={['user', 'NIC No']}
                            rules={[
                              {
                                required: true,
                                message: 'input your valid NIC Number',
                              },
                            ]}
                          >
                            <input />
                            </Form.Item>
                            <Form.Item
                            label="Phone No"
                            name={['user', 'Phone No']}
                            rules={[
                              {
                                required: true,
                                len: 10,
                                
                              },
                            ]}
                          >
                            <input />
                            </Form.Item>
                            <Form.Item label="Job Role"
                                      name={['user', 'Job Role']}
                                      rules={[
                          {
                            required: true,
                            message: 'Please select your Job Role',
                          },
                          
                          ]}>
                            <Select onChange={this.onChange}>
                              <Select.Option value="Student">Student</Select.Option>
                              <Select.Option value="Teacher">Teacher</Select.Option>
                            </Select>
                          </Form.Item>  
                          
                          
                          
                          
                        {
                           this.state.role==="Student" ? (
                            <Form.Item 
                            label="Student Id"
                            name={['user', 'Student Id']}
                            rules={[
                              {  
                                required: false,
                                message: 'Please input your Student Id',
                              },
                            ]}
                          >
                            <input />
                            </Form.Item>
                           ) : (<div></div>)}
                           <Form.Item
                              name={['user', 'email']}
                              label="Email"
                              rules={[
                                {
                                  required: true,
                                  type: 'email',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name={['user', 'password']}
                              label="password"
                              rules={[
                                {
                                  required: true,
                                  type: 'password',
                                },
                              ]}
                            >
                              <Input.Password />
                            </Form.Item>
                            <Form.Item
                              wrapperCol={{
                                    ...this.layout.wrapperCol,
                                    offset: 8,
                              }}
                            >
                              <Button type="primary" htmlType="submit">
                                Register
                              </Button>
                            </Form.Item>
                    </Form>      
        )
    }


 }
 export default SignUp;

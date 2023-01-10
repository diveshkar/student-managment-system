// import React, {Component}from "react";
// import { Form , Select , Input , Button,} from "antd";
// import {api} from "./api";
// import axios from "axios";



// class SignUp extends Component {
//   state = {
//     role: '',
//     Firstname: '',
//     Lastname: '',
//     StudentId: '',
//     name: '',
//     name: '',
//     mobile: '',
//     email: ''
//   }
//   onChange= (value) => {
//     this.setState({role: value})

//   };
//   layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
    
//   };
//   validateMessages = {
//     required: '${name} is required',
//     types: {
//       email: '${label} is not a valid email!',
//       password: '${label} is not a valid Password!',
//     },
//     number: {
//       len: '${label} must equal ${len}',
//     },
//     };
//     onFinish = () => {
//       // console.log('Success:', values);
     
//      let fData = new FormData();
//       fData.append('name', Firstname);
//       fData.append('mobile', mobile);
//       fData.append('email', email);
//       axios.post(api, fData)
//      axios.post(api, values).then(response=> alert(response.data)).catch(error=> alert(error));
//     };
    
  
//     render() {
//         return(
            
//                     <Form
//                     {...this.layout}
//                     name="Registraion"
//                      initialValues={{
//                        remember: true,
//                      }}
//                      onFinish={this.onFinish}
                     
//                     validateMessages={this.validateMessages}
//                      >
//                       <h1>SMS Registraion</h1>
//                             <Form.Item
//                             label="First Name"
//                             // value ="Firstname"
//                             name={['user', 'Firstname']}
//                             rules={[
//                               {
//                                 required: true,
//                               },
//                             ]}
//                           >
//                             <input />
//                             </Form.Item>
//                             <Form.Item
//                             label="Last Name"
//                             // value ="Lastname"
//                             name={['user', 'Lastname']}
//                             rules={[
//                               {
//                                 required: true,
//                               },
//                             ]}
//                           >
//                             <input />
//                             </Form.Item>
//                             <Form.Item
//                             label="NIC No"
//                             // value ="NIC"
//                             name={['user', 'NIC']}
//                             rules={[
//                               {
//                                 required: true,
//                                 message: 'input your valid NIC Number',
//                               },
//                             ]}
//                           >
//                             <input />
//                             </Form.Item>
//                             <Form.Item
//                             label="Phone No"
//                             // value ="Phoneno"
//                             name={['user', 'Phoneno']}
//                             rules={[
//                               {
//                                 required: true,
//                                 len: 10,
                                
//                               },
//                             ]}
//                           >
//                             <input />
//                             </Form.Item>
//                             <Form.Item 
//                             label="Job Role"
//                             // value ="Jobrole"
//                             name={['user', 'Jobrole']}
//                             rules={[
//                           {
//                             required: true,
//                             message: 'Please select your Job Role',
//                           },
                          
//                           ]}>
//                             <Select onChange={this.onChange}>
//                               <Select.Option value="Student">Student</Select.Option>
//                               <Select.Option value="Teacher">Teacher</Select.Option>
//                             </Select>
//                           </Form.Item>  
                          
                          
                          
                          
//                         {
//                            this.state.role==="Student" ? (
//                             <Form.Item 
//                             label="Student Id"
//                             // value ="StudentId"
//                             name={['user', 'StudentId']}
//                             rules={[
//                               {  
//                                 required: false,
//                                 message: 'Please input your Student Id',
//                               },
//                             ]}
//                           >
//                             <input />
//                             </Form.Item>
//                            ) : (<div></div>)}
//                            <Form.Item
//                               name={['user', 'email']}
//                               label="Email"
//                               // value ="Email"
//                               rules={[
//                                 {
//                                   required: true,
//                                   type: 'email',
//                                 },
//                               ]}
//                             >
//                               <Input />
//                             </Form.Item>
//                             <Form.Item
//                               name={['user', 'password']}
//                               // value ="Password"
//                               label="password"
//                               rules={[
//                                 {
//                                   required: true,
//                                   type: 'password',
//                                 },
//                               ]}
//                             >
//                               <Input.Password />
//                             </Form.Item>
//                             <Form.Item
//                               wrapperCol={{
//                                     ...this.layout.wrapperCol,
//                                     offset: 8,
//                               }}
//                             >
//                               <Button type="primary" htmlType="submit" name="btn">
//                                 Register
//                               </Button>
//                             </Form.Item>
//                     </Form>
                  
//         )
//     }


//  }

import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';


function SignUp() {
  const [Firstname,setFirstName] = useState('');
  const [Lastname,setLastName] = useState('');
  const [NIC,setNIC] = useState('');
  const [Phoneno,setPhoneno] = useState('');
  const [Jobrole,setJobrole] = useState('');
  const [StudentId,setStudentId] = useState('');
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');


  const handleSubmit = () => {
    if(Firstname.length === 0){
      alert("FirstName has left Blank!");
    }
    else if(Lastname.length===0){
      alert("Lastname has left blank");
    }
    else if(NIC.length===0){
      alert("NIC has left blank");
    }
    else if(Phoneno.length===0){
      alert("Mobile has left Blank!");
    }
    else if(Email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/api/index.php';
      let fData = new FormData();
      fData.append('Firstname', Firstname);
      fData.append('Lastname', Lastname);
      fData.append('NIC', NIC);
      fData.append('Phoneno', Phoneno);
      fData.append('Jobrole', Jobrole);
      fData.append('StudentId', StudentId);
      fData.append('Email', Email);
      fData.append('Password', Password);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }

  return (
    <>
      <div className='container'>
        <h2>Registraion Form</h2>
        <label htmlFor="Firstname">FirstName</label>
        <input type="text" name="Firstname" id="Firstname" value={Firstname} onChange={(e) => setFirstName(e.target.value)} /><br />
        <label htmlFor="LAstname">Lastname</label>
        <input type="text" name="Lastname" id="Lastname" value={Lastname} onChange={(e) => setLastName(e.target.value)} /><br />
        <label htmlFor="NIc">NIC</label>
        <input type="text" name="NIC" id="NIC" value={NIC} onChange={(e) => setNIC(e.target.value)} /><br />
        <label htmlFor="Phoneno">PhoneNo</label>
        <input type="text" name="Phoneno" id="Phoneno" value={Phoneno} onChange={(e) => setPhoneno(e.target.value)} /><br />
        <label htmlFor="Jobrole">Jobrole</label>
        <select name="Jobrole" id="Jobrole" value={Jobrole} onChange={(e) => setJobrole(e.target.value)}><br />
              <option value=""></option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
        </select><br />
        <label htmlFor="StudentId">StudentId</label>
        <input type="text" name="StudentId" id="StudentId" value={StudentId} onChange={(e) => setStudentId(e.target.value)} /><br />
        <label htmlFor="Email">Email</label>
        <input type="Email" name="Email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="button" name="submit" id="submit" value="REGISTER" onClick={handleSubmit} />
      </div>
    </>
  );
}
export default SignUp;
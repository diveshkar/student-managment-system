// import { Button, Checkbox, Form, Input } from 'antd';
// import React, { Component } from 'react';
// import './Login.css'
// import axios from 'axios';

// const url = 'http://localhost/api/login.php';
//       let fData = new FormData();
//       fData.append('NIC', NIC);
//       fData.append('Jobrole', Jobrole);
//       fData.append('Password', Password);
//       axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
// class Login extends Component {
  
//    onFinish = (values) => {
//     console.log('Success:', values);
//   };
//    onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
// //    myStyle= {
// //     position: "center",
// //     top: "300px",
// //     right: "420px",
// //     width: "500px",
// //     padding: "50px",
// //     borderStyle: "solid",

// // };

// render() { 
//         return (
//           <div className='container'>
//             <h2>LOGIN HERE..!</h2>
//           <Form
//             name="Login"
//             labelCol={{
//               span: 5,
//             }}
//             wrapperCol={{
//               span: 30,
//             }}
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={this.onFinish}
//             onFinishFailed={this.onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item label="Job Role"
//                         name="Jobrole"
//                         value="Jobrole"
//                         rules={[
//                           {
//                             required: true,
//                             message: 'Please select your Job Role',
//                           },
                          
//                           ]}>
//                           <select>
//                               <option value=""></option>
//                               <option value="Student">Student</option>
//                               <option value="Teacher">Teacher</option>
//                             </select>
//                           </Form.Item>
//             <Form.Item
//               label="NIC"
//               name="NIC"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your NIC!',
//                 },
//               ]}
//             >

//               <Input />
//             </Form.Item>
      
//             <Form.Item
            
//               label="Password"
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your password!',
//                 },
//               ]}
//             >
//               <Input type='password'/>
//             </Form.Item>
//             <Form.Item
//               name="remember"
//               valuePropName="checked"
//               wrapperCol={{
//                 offset: 8,
//                 span: 16,
//               }}
//             >
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
      
//             <Form.Item
//               wrapperCol={{
//                 offset: 8,
//                 span: 16,
//               }}
//             >
//               <Button type="primary" htmlType="submit">
//                 Login
//               </Button>
      
//             </Form.Item>
//           </Form>
//           </div>
//         );
//       };
// }
// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';




function Login() {
  const [NIC,setNIC] = useState('');
  const [Jobrole,setJobrole] = useState('');
  const [Password,setPassword] = useState('');


  const handleSubmit = () => {
    if(Jobrole.length === 0){
      alert("Jobrole has left Blank!");
    }
    else if(NIC.length===0){
      alert("NC has left blank");
    }
    else if(Password.length===0){
      alert("Password has left blank");
    }
    else{
      const url = 'http://localhost/api/login.php';
      let fData = new FormData();
      fData.append('NIC', NIC);
      fData.append('Jobrole', Jobrole);
      fData.append('Password', Password);
      axios.post(url, fData)
      .then(function(response){
        alert(response.data);
        const myarray = response.data.split("   ");
        // bcz of space probm
        if(myarray[1] === "StudentSuccess"){
          window.location = "http://localhost:3000/Student";
        }
        else if(myarray[1] === "TeacherSuccess"){
          window.location = "http://localhost:3000/Teacher"
        }
      })
      .catch(function(error){
        alert(error);
      })
      // window.location.replace("http://www.w3schools.com");
    }
    // if(Password === 'dive123'){
    //   window.location.replace("http://localhost:3000/Student");
    // }
  }

  return (
    <>
      <div className='container'>
        <h2>LOGIN FORM...!!!</h2>
        <label htmlFor="Jobrole">Jobrole</label>
        <select name="Jobrole" id="Jobrole" value={Jobrole} onChange={(e) => setJobrole(e.target.value)} required><br />
              <option value=""></option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
        </select><br />
        <label htmlFor="NIc">NIC</label>
        <input type="text" name="NIC" id="NIC" value={NIC} onChange={(e) => setNIC(e.target.value)} required/><br />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required/><br />
        <input type="button" name="submit" id="submit" value="LOGIN" onClick={handleSubmit} />
      </div>
    </>
  );
}
export default Login;
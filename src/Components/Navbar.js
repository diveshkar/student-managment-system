import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import './Navbar.css'

const Navbar = () => (
<div>
  <Breadcrumb className='x'>            
    <Breadcrumb.Item href="/">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/log">
      <UserOutlined />
      <span>Login</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href='/SignUp'>SignUp</Breadcrumb.Item>
  </Breadcrumb>
</div>

);

export default Navbar;
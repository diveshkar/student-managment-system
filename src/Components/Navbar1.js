import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import './Navbar.css'

const Navbar1 = () =>(
  <div>

  <Breadcrumb className='x'>            
    <Breadcrumb.Item href="/">
      <HomeOutlined></HomeOutlined>
    </Breadcrumb.Item>
  </Breadcrumb>
  </div>
);


export default Navbar1;
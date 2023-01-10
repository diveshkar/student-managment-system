import React, { Component } from 'react';
import { Table } from 'antd';
// import { Layout } from 'antd';


// const { Header, Footer, Sider, Content } = Layout;


class Student extends Component {

 columns = [
  { 
    title: 'Subject',
    dataIndex: 'Subject',
  },
  {
    title: 'Marks',
    dataIndex: 'Marks',
    align: 'center',
  },
  {
    title: 'Grade',
    dataIndex: 'Grade',
  },
];
 data = [
  {
    key: '1',
    Subject: 'web',
    Marks: '80',
    Grade: 'A',
  },
  {
    key: '2',
    Subject: 'java',
    // eslint-disable-next-line
    Marks: '90',
    Grade: 'A',
  },
  {
    key: '3',
    Subject: 'fse',
    Marks: '75',
    Grade: 'A',
  },
];
render() {
    return(
<div>
    <div ><Table 
    className='left'
    bordered
    columns={this.columns}
    dataSource={this.data}/></div>
  
</div>

 );
 }
}
export default Student;

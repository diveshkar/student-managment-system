import React, { Component } from 'react';
import { Button, Space } from 'antd';


class Home extends Component {
   

    onredirect = () => {
        window.location.replace("/log");
        }
    render() {
    return (
        <div>
        <Space wrap>
            <Button onClick={this.onredirect} type="primary" danger>
            Login
            </Button>
        </Space>
        </div>
    );
}
}
export default Home;
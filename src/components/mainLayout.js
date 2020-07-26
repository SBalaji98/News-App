import React from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Typography } from 'antd';

const { Title } = Typography;

export default function mainLayout(props) {
    return (
      
        <Layout className="site-layout" style={{
            // marginLeft: 250,
            overflow: 'auto',
            height: '100vh',

        }}>
            {/* <Menu theme="dark" mode="horizontal" style={{ padding: 0, position: 'fixed', zIndex: 999, width: '100%' ,backgroundColor:'#56a832'}}>
                <Menu.Item><Title strong underline={true} level={2} style={{ alignContent: "center", color: "orange" }}> News Headlines</Title></Menu.Item>
            </Menu> */}
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    textAlign: 'center'
                }}
            >
                {props.children}
            </Content>
        </Layout>
    )
}

import React from 'react'
import { Layout, Menu } from 'antd';
const { Content } = Layout;

export default function mainLayout(props) {
    return (

        <Layout className="site-layout" style={{
            overflow: 'auto',
            height: '100vh',
        }}>
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

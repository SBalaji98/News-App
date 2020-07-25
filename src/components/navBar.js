
import React from 'react'
import { Menu, Typography, Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default function navBar(props) {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <img src="https://www.iconarchive.com/show/mono-business-2-icons-by-custom-icon-design/news-icon.html"></img>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {props.nav}
                </Menu>
            </Header>
            {props.children}
        </Layout>
    )
}

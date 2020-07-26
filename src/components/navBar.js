
import React from 'react'
import { Menu, Typography, Layout } from 'antd'

const { Header } = Layout;

export default function navBar(props) {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {props.nav}
                </Menu>
            </Header>
            {props.children}
        </Layout>
    )
}

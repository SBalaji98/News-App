
import React from 'react'
import { Layout, Menu } from 'antd';
import {
    SolutionOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

export default function sideBar(props) {
    const srcArray = [...new Set(props.sources)]
    return (
        <Layout>
            <Sider
                width={250}
                className="site-layout-background"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    // position: 'fixed',
                    left: 0,
                }}
            >
                <Menu mode="inline" defaultSelectedKeys={['0']}>
                    {
                        srcArray !== [] && srcArray.map((cat, i) =>
                            <Menu.Item key={i} onClick={
                                () => {
                                    props.handleSource(cat)
                                }
                            }
                            style={{
                                fontSize:'15px'
                            }}
                            >
                                {cat.name}
                            </Menu.Item>)
                    }
                </Menu>
            </Sider>
            {props.children}
        </Layout>
    )
}

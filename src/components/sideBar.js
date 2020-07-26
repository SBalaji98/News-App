
import React from 'react'
import { Layout, Menu } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
import {
    SolutionOutlined
} from '@ant-design/icons';

const {  Sider } = Layout;

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
                {/* <Title underline={true} level={5} style={{ color: "#56a832",position:'fixed' }}> News Providers</Title> */}

                    {
                        srcArray !== [] && srcArray.map((cat, i) =>
                            <Menu.Item key={i} onClick={
                                () => {
                                    props.handleSource(cat)
                                }
                            }>
                                {cat.name}
                            </Menu.Item>)
                    }
                </Menu>
            </Sider>
            {props.children}
        </Layout>
    )
}

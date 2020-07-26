import { Spin, Space } from 'antd';


import React from 'react'

export default function spin() {
    return (
        // <Space size="middle">
        //     <Spin size="large" />
        // </Space>
        <div style={{
            display:'flex',
            position: 'fixed',
            top:0,
            left:0,
            opacity:0.5,
            flexDirection:'column',
            zIndex:20,
            justifyContent:'center',
            width:'100vw',
            height:'100vh',
            textAlign:'center'
            }}>
            <Spin size='large' tip='Loading News'/>
        </div>
    )
}

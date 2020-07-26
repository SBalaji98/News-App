import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
// import Spin from './spin'
import { Spin } from 'antd'

export default function myLoader(props) {
    return (
        <LoadingOverlay
        active={props.active}
        spinner={<Spin />}
      >
        {props.children}
      </LoadingOverlay>
    )
}

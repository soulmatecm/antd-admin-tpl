import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SideMenu from '@/components/SideMenu'
import { Layout } from 'antd'

export default function BasicLayout({ route, children }) {
  return (
    <Layout className="main-layout">
      <SideMenu routes={route.routes} />
      {/* 左侧菜单导航 */}
      <Layout className="main-layout-right">
        {/* <MainHeader /> */}
        <div>header</div>
        <Layout.Content className="main-layout-content">
          {children}
          {/* <MainFooter></MainFooter> */}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

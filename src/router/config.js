// 静态路由配置，注意exact配置

import React from 'react'

import BasicLayout from '@/layouts/BasicLayout'

export default [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/home',
        name: '主页',
        component: React.lazy(() => import('@/pages/home'))
      },
      {
        path: '/devices',
        name: '设备列表',
        component: React.lazy(() => import('@/pages/device/List')),
        exact: true
      },
      {
        path: '/devices/:id',
        name: '设备详情',
        component: React.lazy(() => import('@/pages/device/Detail'))
      }
    ]
  }
]

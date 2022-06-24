import { RouteRecordRaw } from 'vue-router'
import { DashboardOutlined } from '@vicons/antd'
import { renderIcon } from '@/utils/index'
const Layout = () => import('@/layout/index.vue')
const routeName = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/console',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: renderIcon(DashboardOutlined),
      permissions: ['dashboard_console', 'dashboard_console', 'dashboard_workplace'],
      sort: 0,
    },
    children: [
      {
        path: 'console',
        name: `${routeName}_console`,
        meta: {
          title: '主控台',
          permissions: ['dashboard_console'],
          affix: true,
        },
        component: () => import('@/views/dashboard/console/index.vue'),
      },
    ],
  },
]
export default routes

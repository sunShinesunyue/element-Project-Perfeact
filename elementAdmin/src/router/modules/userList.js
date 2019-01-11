/** 用户的列表页面**/

/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/complex-table',
  name: 'User',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/userList/index'),
      name: 'UserList',
      meta: { title: 'userList' }
    } 
  ]
}
export default userRouter
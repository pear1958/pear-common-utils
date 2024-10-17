import { describe, it, expect } from 'vitest'
import { getFlatArr, getMatchNodeList } from '@/array'

const originArr = [
  {
    path: '/menu',
    redirect: '/menu/menu1',
    meta: {
      icon: 'ep:histogram',
      title: '多级菜单',
    },
    children: [
      {
        path: '/menu/menu2',
        redirect: '/menu/menu2/menu21',
        meta: {
          title: '菜单2',
        },
        children: [
          {
            path: '/menu/menu2/menu21',
            component: '/menu/menu2/menu21/index',
            meta: {
              title: '菜单2-1',
            },
          },
        ],
      },
    ],
  },
]

const expectArr = [
  {
    path: '/menu',
    redirect: '/menu/menu1',
    meta: {
      icon: 'ep:histogram',
      title: '多级菜单',
    },
    children: [
      {
        path: '/menu/menu2',
        redirect: '/menu/menu2/menu21',
        meta: {
          title: '菜单2',
        },
        children: [
          {
            path: '/menu/menu2/menu21',
            component: '/menu/menu2/menu21/index',
            meta: {
              title: '菜单2-1',
            },
          },
        ],
      },
    ],
  },
  // push - 进来
  {
    path: '/menu/menu2',
    redirect: '/menu/menu2/menu21',
    meta: {
      title: '菜单2',
    },
    children: [
      {
        path: '/menu/menu2/menu21',
        component: '/menu/menu2/menu21/index',
        meta: {
          title: '菜单2-1',
        },
      },
    ],
  },
  // ---------
  {
    path: '/menu/menu2/menu21',
    component: '/menu/menu2/menu21/index',
    meta: {
      title: '菜单2-1',
    },
  },
]

describe('数组相关', () => {
  it('扁平化数组对象, 提取对于的 key数组 的 子元素 到第一级', () => {
    expect(getFlatArr(originArr)).toEqual(expectArr)
  })

  it('路径匹配', () => {
    expect(
      getMatchNodeList('/menu/menu2/menu21', [
        { path: 'aaa' },
        ...originArr,
        { path: 'bbb' },
      ])
    ).toEqual([
      ...originArr,
      ...originArr[0].children,
      ...originArr[0].children[0].children,
    ])
  })
})

<template>
        <Row>
            <SilderMenu :isCollapsed="false" :menuList="dataList"></SilderMenu>
        </Row>
</template>

<script>

import SilderMenu from '@/components/SilderMenu.vue'

export default {
  name: 'RecursionView',
  components: { SilderMenu },
  data () {
    return {
      dataList: [
        {
          title: '第1个主菜单',
          name: 'menu111',
          icon: 'ios-paper',
          children: [
            {
              title: '主菜单1的2级菜单1',
              name: 'menu111-111',
              icon: '',
              children: [
                { title: '主菜单1的3级菜单1', name: 'menu111-111-1', icon: '' },
                { title: '主菜单1的3级菜单2', name: 'menu111-111-2', icon: '' },
                { title: '主菜单1的3级菜单3', name: 'menu111-111-3', icon: '' },
                { title: '主菜单1的3级菜单4', name: 'menu111-111-4', icon: '' }
              ]
            },
            { title: '主菜单1的2级菜单2', name: 'menu111-222', icon: '' },
            { title: '主菜单1的2级菜单3', name: 'menu111-333', icon: '' }
          ]
        },
        {
          title: '第2个主菜单',
          name: 'menu222',
          icon: 'ios-people',
          children: [
            { title: '主菜单2的2级菜单1', name: 'menu222-111', icon: '' },
            { title: '主菜单2的2级菜单2', name: 'menu222-222', icon: '' },
            { title: '主菜单2的2级菜单3', name: 'menu222-333', icon: '' }
          ]
        }
      ]
    }
  }

}
</script>

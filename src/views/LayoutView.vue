<template>
    <div class="layout-warpper">
        <Layout class="layout-out">
          <!-- 最侧菜单 collapsible 表示是否可以收起 -->
            <Sider :class="silderClass" :hide-trigger="true"  :collapsible="true" v-model="isCollapsed">
              <SilderMenu
              :isCollapsed="isCollapsed"
              @clickMenuAction="clickMenuAction"
              :menuList="dataList">
                <template v-slot:logo>
                  <div style="width: 100%; height: 80px; display: flex; justify-content: center; align-items: center; font-weight: 700; background-color: cadetblue;">插槽这里放置logo信息</div>
                </template>
              </SilderMenu>
            </Sider>
            <!-- layout 中的右边还是一个 layout 该 layout 是在外层layout右边  -->
            <Layout class="layout-inside">
              <!-- 头部视图 -->
                <Header class="header-class">
                  <Icon @click="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <!-- 头部视图下面的内容 -->
                <Content class="content-class">
                  <Card class="content-card">
                    <router-view></router-view>
                  </Card>

                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>

import { Api } from '../api'
import Http from '../utils/http'
import SilderMenu from '@/components/SilderMenu.vue'

export default {
  components: { SilderMenu },
  data () {
    return {
      // Sider 是否收起
      isCollapsed: false,
      dataList: [
        {
          title: '1',
          name: 'menu666',
          icon: 'ios-people',
          children: [
            {
              title: '1-1',
              name: 'menu111-111',
              icon: 'arrow-expand',
              children: [
                { title: '1-1-1', name: 'menu111-111-1', icon: 'navicon-round' },
                { title: '1-1-2', name: 'menu111-111-2', icon: 'navicon' },
                { title: '1-1-3', name: 'menu111-111-3', icon: 'plus-circled' },
                { title: '1-1-4', name: 'menu111-111-4', icon: 'plus', children: [{ title: '1-1-4-1', name: 'menu111-111-4-1', icon: 'minus-circled' }] }
              ]
            },
            { title: '1-2', name: 'menu111-222', icon: 'help-buoy' },
            { title: '1-3', name: 'menu111-333', icon: 'ios-paper' }
          ]
        },
        {
          title: '2',
          name: 'menu222',
          icon: 'ios-football',
          children: [
            { title: '2-1', name: 'menu222-111', icon: 'ios-paper' },
            { title: '2-2', name: 'menu222-222', icon: 'ios-paper' },
            { title: '2-3', name: 'menu222-333', icon: 'ios-paper' }
          ]
        },
        {
          title: '3',
          name: 'menu333',
          icon: 'ios-mic',
          children: [
            { title: '3-1', name: 'menu333-111', icon: 'ios-paper' },
            { title: '3-2', name: 'menu333-222', icon: 'ios-paper' },
            { title: '3-3', name: 'menu333-333', icon: 'ios-paper' }
          ]
        },
        {
          title: '4',
          name: 'recursion',
          icon: 'ios-football',
          children: [
            { title: '4-1', name: 'menu444-111', icon: 'ios-paper' },
            { title: '4-2', name: 'menu444-222', icon: 'ios-paper' },
            { title: '4-3', name: 'home', icon: 'ios-paper' }
          ]
        },
        {
          title: '5',
          name: 'about',
          icon: 'ios-people'
        },
        {
          title: '6',
          name: 'table',
          icon: 'ios-football'
        }
      ]
    }
  },

  computed: {
    rotateIcon () {
      return [
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses: function () {
      return [
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    silderClass () {
      return [
        this.isCollapsed ? 'sider-class' : 'sider-class-open'
      ]
    }
  },

  methods: {

    /**
     * 点击 menu 菜单
     * @param {*} key
     */
    clickMenuAction (key) {
      const path = key
      this.$router.push(path)
    },

    // 展开事件
    collapsedSider () {
      this.isCollapsed = !this.isCollapsed
    },
    // 更新
    update () {
      Http.post(Api.updateUserInfo, { id: this.id, name: this.name }).then((resp) => {
        this.result = resp
      })
    },
    // 查询
    query () {
      Http.post(Api.getUserInfo, { id: this.id }).then((resp) => {
        this.result = resp
      })
    },
    // 新增
    submit () {
      Http.post(Api.saveUserInfo, {
        id: this.id,
        name: this.name,
        age: this.age,
        phone: this.phone
      }).then((resp) => {
        this.result = resp
      })
    },

    // 删除
    deleteAction () {
      Http.post(Api.deleteUserInfo, {
        id: this.id
      }).then((resp) => {
        this.result = resp
      })
    }
  }

}
</script>

<style lang="scss" scoped>

.layout-warpper {
    width: 100%;
    height: 100%;
    background: #f5f7f9;
}
.layout-out {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    // overflow: hidden;
}

.sider-class {
    width: 30%;
    height: 100%;
    background-color: #515a6e;
}

.sider-class-open {
    width: 30%;
    height: 100%;
    background-color: #515a6e;
    overflow: auto,
}

.layout-inside {
    width: 70%;
    height: 100%;
    background-color: #fff;
}

.header-class {
    width: 100%;
    padding: 0;
    text-align: left;
    background-color: #f5f7f9;
    box-shadow: 0 1px 1px 1px rgba(128, 119, 119, 0.1);
}

.content-class {
    width: 100%;
    height: calc(100vh - 30px - 64px);
    background-color: #fff;
    padding: 15px;
    overflow: auto
}

.rotate-icon{
  transform: rotate(-90deg);
}
.content-card {
  // 100vh 整个屏幕的高度
  min-height: calc(100vh - 30px - 64px);
}

 ::v-deep .ivu-menu-submenu-title {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 ::v-deep .ivu-menu {
  background: #515a6e;
 }
</style>

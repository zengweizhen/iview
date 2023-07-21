
<template>
<div>
  <Menu theme="dark" width="auto" @on-select="handelClick">
    <slot name="logo"></slot>
    <div v-show="!isCollapsed">
      <template  v-for="item in menuList" :key="`menu-${item.title}`">
      <Submenu v-if="item.children" :name="item.name">
        <template v-slot:title>
            <Icon :type="item.icon"></Icon>
            {{item.title}}
        </template>
        <template v-if="item.children">
          <ReSubMenu :hiddenIcon="true" :children="item.children"></ReSubMenu>
        </template>
      </Submenu>
      <Menu-item v-else :name="item.name" :key="`menu-${item.title}`">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
      </Menu-item>
    </template>
    </div>

    <div v-show="isCollapsed" class="dropdownStyle">
      <template  v-for="item in menuList" :key="`menu-${item.title}`">
      <!-- hiddenTitle 隐藏标题（递归组件的第一级） -->
      <SilderDropdown @clickDropdownAction="handelClick" iconColor="cadetblue" :hiddenTitle="true" v-if="item.children" :dropdownItem="item"></SilderDropdown>
      <Tooltip v-else transfer :content="item.title" placement="right">
        <a class="drop-menu-a">
          <Icon :type="item.icon" size="20"></Icon>
        </a>
      </Tooltip>
    </template>
    </div>

  </Menu>
  <div></div>
</div>
</template>
<script>
import ReSubMenu from './ReSubMenu.vue'
import SilderDropdown from './SilderDropdown.vue'
export default {
  name: 'SilderMenu',
  components: { ReSubMenu, SilderDropdown },
  props: {
    menuList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否收起
    isCollapsed: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    clickMenuAction: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  methods: {
    /**
     * 选中 menu 的 name
     * @param {*} name
     */
    handelClick (name) {
      this.$emit('clickMenuAction', name)
    }
  }
}
</script>

<style lang="scss" scoped>
 .ivu-tooltip, .drop-menu-a{
  width: 100%;
  display: block;
  color: #81a5d1;
}

// (>) 表示选择 dropdownStyle 下面的 ivu-dropdown 样式进行修改
.dropdownStyle > .ivu-dropdown {
  display: block;
}
</style>

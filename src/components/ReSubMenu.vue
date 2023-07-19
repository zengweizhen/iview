<template>
  <template v-for="item in children" :key="`menu-${item.name}`">
    <Submenu :name="item.name" v-if="item.children">
        <template v-slot:title>
            <Icon v-if="!hiddenIcon" :type="item.icon"></Icon>
            {{item.title}}
        </template>
          <ReSubMenu :hiddenIcon="true" :children="item.children"></ReSubMenu>
      </Submenu>
      <Menu-item v-else :name="item.name" :key="`menu-${item.title}`">
          <!-- <Icon :type="item.icon"></Icon> -->
          {{item.title}}
      </Menu-item>
  </template>
</template>

<script>
export default {
  name: 'ReSubMenu',
  components: {},
  props: {
    children: {
      type: Array,
      default: () => {
        return []
      }
    },
    hiddenIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>

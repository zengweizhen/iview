
<template>
    <Dropdown placement="right-start" :name="dropdownItem.name" @on-click="clickDropdown">
      <a class="drop-menu-a">
        <Icon :color="iconColor" :type="dropdownItem.icon" size="20"></Icon>
        <span v-if="!hiddenTitle" style="color: #535252;">{{dropdownItem.title}}</span>
      </a>
      <template #list>
        <DropdownMenu>
        <template v-for="item in dropdownItem.children" :key="item.name">
          <SilderDropdown iconColor="#81a5d1" v-if="item.children" :dropdownItem="item"></SilderDropdown>
          <DropdownItem v-else :name="item.name">{{item.title}}</DropdownItem>
        </template>
      </DropdownMenu>
      </template>

    </Dropdown>

</template>

<script>
export default {
  name: 'SilderDropdown',
  props: {
    dropdownItem: {
      type: Object,
      default: () => ({})
    },
    hiddenTitle: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: '#222'
    },
    clickDropdownAction: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
    clickDropdown (name) {
      this.$emit('clickDropdownAction', name)
    }
  }
}
</script>

<style lang="scss" scoped>
 .drop-menu-a {
  width: 100%;
  display: block;
  color: #81a5d1;
}

</style>

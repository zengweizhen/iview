<template>
    <TreeComponent :treeData="treeData" ></TreeComponent>
    <!-- <Tree :data="treeData"></Tree> -->
</template>

<script>
import TreeComponent from '@/components/TreeComponent.vue'
export default {
  name: 'TreeView',
  components: { TreeComponent },
  data () {
    return {
      treeData: [
        {
          expand: false,
          title: '植物',
          code: '001',
          children: [{
            title: '水果',
            code: '001-1',
            expand: false,
            disabled: true,
            children: [{
              title: '香蕉',
              code: '001-1-1',
              disableCheckbox: false
            },
            {
              title: '苹果',
              code: '001-1-2'
            }]
          },
          {
            title: '蔬菜',
            code: '001-2',
            expand: false,
            checked: false,
            children: [{
              title: '西蓝花',
              code: '001-2-1'

            }]
          }]
        },
        {
          title: '动物',
          code: '002',
          children: [
            { title: '老虎', code: '002-1' },
            { title: '狮子', code: '002-2' }
          ]

        }]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.ivu-tree {
    text-align: left !important;
}
</style>

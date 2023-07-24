<template>
    <Tree :show-checkbox="showCheckbox" @on-check-change="onCheckChange" :data="treeData" :render="renderContent"></Tree>
</template>
<script>
import { Icon } from 'view-ui-plus'

// import { resolveComponent } from 'vue'
export default {
  name: 'TreeComponent',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    onCheckChangeArray: {
      type: Function,
      default: () => {}
    },
    // 是否显示 checkbox 默认不显示
    showCheckbox: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onCheckChange (value, selectedItem) {
      this.$emit('onCheckChangeArray', value, selectedItem)
    },
    renderContent (h, { root, node, data }) {
      let col = 'green'
      if (data.disabled) { // 这里可以做条件选择
        col = 'red'
      }
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
        <Icon type='ios-mic'></Icon>
        <span style={{ color: col }}>{data.title}</span>
        </div>
      )
      // return h('span', {
      //   style: {
      //     display: 'inline-block',
      //     width: '100%'
      //   }
      // }, [h('span', [h(resolveComponent('Icon'), { // 不需要icon可以删除掉（系统自带的 HTML 标签可以直接写例如 span、如果使用了第三方的话需要使用 resolveComponent ）
      //   type: 'ios-mic',
      //   style: {
      //     marginRight: '8px'
      //   }
      // }), h('span', { // 如果需要配合点击事件获得节点信息，这里可以用a标签
      //   style: {
      //     color: col // 这里设置title的颜色
      //   }
      // }, data.title), h('div', {
      //   style: {
      //     display: 'inline-block',
      //     color: 'blue',
      //     marginLeft: '5px',
      //     backgroundColor: '#ededed'
      //   }
      // }, '这里是测试数据')
      // ])]
      // )
    }

  }
}
</script>

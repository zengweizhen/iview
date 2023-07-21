
<template>
    <div style="border: 1px solid #d7dde4;">
        <Table @on-selection-change="selectionChange" highlight-row stripe :columns="displayUiData" :data="dataList"></Table>
    </div>

</template>

<script>

export default {
  name: 'TableListView',
  props: {
    /*
     uiData 数据样式
     {
        title: '年龄',
        // 表格的列是否可编辑
        editable:true,
        // 一直悬浮在左边  left   右边 right
        fixed: 'left',
        // 每一列的宽度
        width: 100,
        key: 'age',
        // 是否排序
        sortable: true,
        // 用于筛选数据
        filters: [
        { label: '大于25岁', value: 1 },
        { label: '小于25岁', value: 2 }
        ],
        filterMultiple: false,
        filterMethod (value, row) {
        if (value === 1) {
            return row.age > 25
        } else if (value === 2) {
            return row.age < 25
        }
        }
    }
     */
    uiData: {
      type: Array,
      default: () => { return [] }
    },
    btnWidth: {
      type: String,
      default: '100'
    },
    // table 展示数据
    dataList: {
      type: Array,
      default: () => { return [] }
    },
    // 操作按钮数组
    buttonList: {
      type: Array,
      default: () => { return [] }
    },
    // table 是否可选择
    selection: {
      type: Boolean,
      default: false
    },
    // table 是否显示序号
    index: {
      type: Boolean,
      default: false
    },
    // cell 选择事件
    selectionChangeAction: {
      type: Function,
      default: () => {}
    }
  },

  mounted () {
    const listData = this.uiData
    const selection = this.selection
    const index = this.index
    const obj = {
      type: 'selection',
      width: 60,
      align: 'center'
    }
    const indexObj = {
      title: '序号',
      type: 'index',
      width: 80,
      align: 'center'
    }
    const foundObj = listData.find(item => obj.type === item.type)
    const foundIndex = listData.find(item => indexObj.type === item.type)
    // index 不存在就插入 存在就不插入
    if (index && !foundIndex) {
      listData.unshift(indexObj)
    }
    // selection 不存在就插入 存在就不插入
    if (selection && !foundObj) {
      listData.unshift(obj)
    }
    const btnList = this.buttonList
    const that = this
    const btnObj = {
      title: '操作',
      key: 'action',
      width: parseFloat(this.btnWidth),
      align: 'center',
      render (row, column, index) {
        const renderView = that.renderBtnListView(row, column, index)
        return renderView
      }
    }
    const actionIndex = listData.findIndex(item => item.key === 'action')
    // 操作列表存在 删除以前的
    if (actionIndex !== -1) {
      listData.splice(actionIndex, 1)
    }
    // 操作按钮存在
    if (btnList && btnList.length > 0) {
      listData.push(btnObj)
    }

    listData.map((item) => {
      if (item.editable) {
        item.render = (h, { row, index, column }) => {
          return (<Input v-model={row[column.key]} placeholder="请输入..." ></Input>)
        }
      }
      return item
    })
    this.displayUiData = listData
  },

  data () {
    return {
      displayUiData: []
    }
  },

  methods: {
    /**
     * 选择
     * @param {*} event
     */
    selectionChange (event) {
      this.$emit('selectionChangeAction', event)
    },

    /**
     * 按钮列表
     * @param {*} row 每行的数据
     * @param {*} column
     * @param {*} index
     */
    renderBtnListView (row, column, index) {
      return (this.buttonList.map((item) => {
        return (
          <Button onClick={this.clickAction.bind(this, column?.row ?? {}, item.clickAction)} type="text" size="small">{item.btnTitle}</Button>)
      }))
    },
    /**
     * 点击操作按钮事件
     * @param {*} row
     */
    clickAction (row, callback) {
      // 回调存在
      if (callback) {
        callback(row)
      }
    }

  }

}
</script>

<template>
    <TableListView btnWidth="300" :buttonList="btnList" @selectionChangeAction="selectionChange" :index="true" :selection="true" :uiData="uiData" :dataList="dataList"></TableListView>
</template>

<script>

import TableListView from '@/components/TableListView.vue'

export default {
  name: 'TableView',
  components: { TableListView },
  data () {
    return {
      uiData: [
        { title: '姓名', key: 'name', editable: true, width: 300 },
        {
          title: '年龄',
          // 一直悬浮在左边  left   右边 right
          // fixed: 'left',
          // 每一列的宽度
          // width: 100,
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
        },
        { title: '手机', key: 'phone' },
        {
          title: '地址',
          key: 'address', // 用于筛选数据
          filters: [
            { label: '北京市', value: '北京市' },
            { label: '上海市', value: '上海市' },
            { label: '广州市', value: '广州市' },
            { label: '深圳市', value: '深圳市' },
            { label: '杭州市', value: '杭州市' },
            { label: '天津市', value: '天津市' },
            { label: '台湾省', value: '台湾省' },
            { label: '海南市', value: '海南市' }
          ],
          filterMethod (value, row) {
            return row.address.indexOf(value) > -1
          }
        }
      ],
      btnList: [
        { btnTitle: '查看', clickAction: (row) => { console.log('查看：', JSON.stringify(row)) } },
        { btnTitle: '详情', clickAction: (row) => { console.log('详情:', JSON.stringify(row)) } }
      ],
      dataList: [
        { name: 'Jney-1', age: '23', phone: '17627912331', address: '上海市松江区-1' },
        { name: 'Jney-2', age: '24', phone: '17627912332', address: '上海市松江区-2' },
        { name: 'Jney-3', age: '25', phone: '17627912333', address: '上海市松江区-3' },
        { name: 'Jney-4', age: '20', phone: '17627912334', address: '北京市松江区-4' },
        { name: 'Jney-5', age: '21', phone: '17627912335', address: '北京市松江区-5' },
        { name: 'Jney-6', age: '26', phone: '17627912336', address: '北京市松江区-6' },
        { name: 'Jney-7', age: '27', phone: '17627912337', address: '广州市松江区-7' },
        { name: 'Jney-1', age: '21', phone: '17627912331', address: '广州市松江区-1' },
        { name: 'Jney-2', age: '22', phone: '17627912332', address: '广州市松江区-2' },
        { name: 'Jney-3', age: '23', phone: '17627912333', address: '天津市松江区-3' },
        { name: 'Jney-4', age: '24', phone: '17627912334', address: '天津市松江区-4' },
        { name: 'Jney-5', age: '25', phone: '17627912335', address: '天津市松江区-5' },
        { name: 'Jney-6', age: '26', phone: '17627912336', address: '台湾省松江区-6' },
        { name: 'Jney-7', age: '27', phone: '17627912337', address: '台湾省松江区-7' },
        { name: 'Jney-1', age: '28', phone: '17627912331', address: '台湾省松江区-1' },
        { name: 'Jney-2', age: '29', phone: '17627912332', address: '深圳市松江区-2' },
        { name: 'Jney-3', age: '28', phone: '17627912333', address: '深圳市松江区-3' },
        { name: 'Jney-4', age: '29', phone: '17627912334', address: '深圳市松江区-4' },
        { name: 'Jney-5', age: '20', phone: '17627912335', address: '杭州市松江区-5' },
        { name: 'Jney-6', age: '15', phone: '17627912336', address: '杭州市松江区-6' },
        { name: 'Jney-7', age: '29', phone: '17627912337', address: '杭州市松江区-7' }
      ]
    }
  },
  methods: {
    selectionChange (event) {
      console.log(JSON.stringify(event))
    }
  }

}
</script>

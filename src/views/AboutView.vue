<template>
  <div>
    <div style="flex-direction: column;display: flex;">
     <Input style="width:200px" v-model="id" placeholder="请输入需要查询用户的id"></Input>
     <Input style="width:200px" v-model="name" placeholder="请输入姓名"></Input>
     <Input style="width:200px" v-model="age" placeholder="请输入年龄"></Input>
     <Input style="width:200px" v-model="phone" placeholder="请输入手机号"></Input>
     <div style="text-align:left">
       <Button style="width:50px" @click="submit">保存</Button>
       <Button style="width:50px" @click="deleteAction">删除</Button>
       <Button style="width:50px" @click="query">查询</Button>
       <Button style="width:50px" @click="update">更新</Button>
     </div>
     <div style="background-color: aliceblue; text-align: left;">{{this.result}}</div>

 </div>
  </div>
</template>
<script>
import { Api } from '../api'
import Http from '../utils/http'

export default {

  data () {
    return {
      id: '',
      name: '',
      age: '',
      phone: '',
      result: {}
    }
  },

  methods: {

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

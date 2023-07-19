<template>
  <div class="home">
    <Button type="info"  @click="pushPage">数据库操作</Button>
    <Button type="info"  @click="pushRec">递归组件</Button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    pushPage () {
      this.$router.push('/about')
    },
    pushRec () {
      this.$router.push('/recursion')
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: '#fff';
}
</style>

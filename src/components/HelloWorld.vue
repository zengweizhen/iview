<template>
  <div class="hello">
    <Button type="info"  @click="pushLayout">按钮</Button>
    <Image style="background-color: antiquewhite; width: 200px; height: 120px;">
      <template #error>
        <Icon type="ios-image-outline" size="24" color="#ccc" />
      </template>
    </Image>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    pushAction: Function
  },
  methods: {
    pushLayout () {
      this.pushAction && this.pushAction()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

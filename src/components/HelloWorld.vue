<template>
  <div class="hello">
    <input v-model="name" />
    {{ fullname }}
    <div>
      <ul>
        <li @click="actionTab(0)" :class="[tab == 0 ? 'active' : '']">Tab 1</li>
        <li @click="actionTab(1)" :class="[tab == 1 ? 'active' : '']">Tab 2</li>
        <li @click="actionTab(2)" :class="[tab == 2 ? 'active' : '']">Tab 3</li>
      </ul>
      <div v-if="tab == 0">Tab 1</div>
      <div v-if="tab == 1">Tab 2</div>
      <div v-if="tab == 2">Tab 3</div>
    </div>
  </div>
</template>

<script>
import './HelloWorld.min.css'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {},
  components: {},
  data: () => ({
    name: ''
  }),
  watch: {
    name: function (newVal) {
      this.actionFullname(newVal)
    }
  },
  computed: {
    ...mapState({
      fullname: (state) => state.fullname,
      tab: (state) => state.tab
    })
  },
  mounted() {
    this.name = this.fullname
  },
  methods: {
    ...mapActions({
      actionFullname: 'actionFullname',
      actionTab: 'actionTab'
    })
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

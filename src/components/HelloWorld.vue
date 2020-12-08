<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <InputText
      type="text"
      v-model="name"
      class="p-inputtext-lg"
      placeholder="Large"
    />
    {{ fullname }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InputText from 'primevue/inputtext'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    InputText
  },
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
      fullname: (state) => state.fullname
    })
  },
  mounted() {
    this.name = this.fullname
  },
  methods: {
    ...mapActions({
      actionFullname: 'actionFullname'
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

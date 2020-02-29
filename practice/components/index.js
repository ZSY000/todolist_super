import Vue from 'vue'

const comp = {
  template: `
    <p>{{value}}</p>
  `,
  data () {
    return {
      text: '123'
    }
  },
  props: {
    value: {
      type: String,
      require: true
    }
  }
}

new Vue({
  el: '#root',
  components: {
    comp
  },
  data () {
    return {
      value: 'haha'
    }
  },
  template: `
    <div>
      <comp v-model='value'></comp>
    </div>
  `
})

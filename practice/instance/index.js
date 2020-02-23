import Vue from 'vue'

var app = new Vue({
  el: '#root',
  data: {
    text: 0
  },
  template: '<p>{{text}}</p>'
})

app.$nextTick(() => {
  app.text++
})
app.$nextTick(() => {
  app.text++
})

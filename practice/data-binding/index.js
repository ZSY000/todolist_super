import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div>
      {{ isActive ? 'active' : 'not active'}}
    </div>
  `,
  data: {
    isActive: false
  }
})

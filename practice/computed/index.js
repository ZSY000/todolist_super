import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    firstname: 'Solin',
    lastname: 'J'
  },
  template: `
    <div>
      <input type="text" v-model="firstname"/>
      <input type="text" v-model="lastname"/>
      <p>{{name}}</p>
    </div>
  `,
  computed: {
    // 作为方法
    name () { // 相当于调用了属性name的getter方法
      return this.firstname + this.lastname
    },
    fullname () {
      return this.firstname + this.lastname
    }
    // // 作为设置
    // age: {
    //   // 获取值
    //   get () {
    //     return this.age1 + this.age2
    //   },
    //   // 设置值
    //   // computed一般是由多个数据组合成的，所以不建议对它重新操作
    //   set (age) {
    //     this.firstname = age[0]
    //     this.lastname = age[1]
    //   }
    // }
  },
  watch: {
    firstname: {
      handler (newVal, oldVal) {
        console.log(newVal + '+' + oldVal)
      }
    }
  }
})

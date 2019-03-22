import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homeScreen'
import QuestionOne from '../components/common/questionOne'
import QuestionTwo from '../components/common/questionTwo'
import Reply from '../components/common/reply'
import More from '../components/questionMore'

Vue.use(Router);
Vue.component('QuestionOne', QuestionOne);
Vue.component('QuestionTwo', QuestionTwo);
Vue.component('Reply', Reply);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
  ]
})

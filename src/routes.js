import Bored from './pages/bored.vue';
import Form from './pages/form.vue';
import Dog from './pages/dog.vue';
import Cat from './pages/cat.vue';
import Advice from './pages/advice.vue';

const routes = [
  {
    path: '/bored', component: Bored
  },
  {
    path: '/form', component: Form
  },
  {
    path: '/dog', component: Dog
  },
  {
    path: '/cat', component: Cat
  },
  {
    path: '/advice', component: Advice
  }
];

export default routes;
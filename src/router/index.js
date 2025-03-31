import { createRouter, createWebHistory } from 'vue-router';

/* Basic */
import Binding from '../components/Binding.vue';
import Method from '../components/Method.vue';
import Event from '../components/Event.vue';
import Form from '../components/Form.vue';
import Computed from '../components/Computed.vue';
import SetterGetter from '../components/SetterGetter.vue';
import Watcher from '../components/Watcher.vue';
import Component from '../components/Component.vue';
import ProvideInjectParent from '../components/ProvideInjectParent.vue';
import Slot from '../components/Slot.vue';
import Request from '../components/Request.vue';
import Hooks from '../components/Hooks.vue';

/* Advanced */
import Advance from '../components/Advance.vue';

const routes = [
  { path: '/binding', component: Binding },
  { path: '/method', component: Method },
  { path: '/event', component: Event },
  { path: '/form', component: Form },
  { path: '/computed', component: Computed },
  { path: '/settergetter', component: SetterGetter },
  { path: '/watcher', component: Watcher },
  { path: '/component', component: Component },
  { path: '/provideinject', component: ProvideInjectParent },
  { path: '/slot', component: Slot },
  { path: '/request', component: Request },
  { path: '/hooks', component: Hooks },

  { path: '/advance', component: Advance },
  { path: '/:pathMatch(.*)*', redirect: '/binding' } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

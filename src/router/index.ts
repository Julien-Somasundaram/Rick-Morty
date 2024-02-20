import { createRouter, createWebHistory } from 'vue-router'
import characterView from '../views/Character.vue'
import characterv2View from '../views/Characterv2.vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/character',
        name: 'character',
        component: characterView
      },
      {
        path: '/test',
        name: 'character2',
        component: characterv2View
      }],
    },
    
    )
    
export default router

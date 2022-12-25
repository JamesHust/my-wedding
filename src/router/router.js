import { createRouter, createWebHistory } from 'vue-router'
import AppTemplate from "@/components/AppTemplate"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView')
        }
      ]
    },
    {
      path: '/gallery/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'Gallery',
          component: () => import('@/views/GalleryView')
        }
      ]
    },
    {
      path: '/qr/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'QR',
          component: () => import('@/views/QRView')
        }
      ]
    },
    {
      path: '/map-directions/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'Map Directions',
          component: () => import('@/views/MapView')
        }
      ]
    },
    {
      path: '/event-time/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'EventTime',
          component: () => import('@/views/EventTimeView')
        }
      ]
    },
  ]
})

export default router

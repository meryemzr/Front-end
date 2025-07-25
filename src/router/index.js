import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import SpectaclePage from '../views/SpectaclePage.vue' 
import AgendaPage from '../views/AgendaPage.vue'
import LoginPage from '../views/LoginPage.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import SupprimerSpectacle from '@/views/SupprimerSpectacle.vue'
import ModifierSpectacle from '@/views/ModifierSpectacle.vue'
import AjoutEvenement from '@/views/AjoutEvenement.vue'
import ModifierEvenement from '@/views/ModifierEvenement.vue'
import SupprimerEvenement from '@/views/SupprimerEvenement.vue'
import AjoutAdmin from '@/views/AjoutAdmin.vue'
import MessagesContact from '@/views/MessagesContact.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  {path : '/contact', component: ContactPage },
  {path: '/spectacles',   // <-- ici tu changes le chemin URL
    name: 'Spectacles',    // nom de la route, tu peux aussi changer
    component: SpectaclePage
  },

  {path: '/agenda', component: AgendaPage, name: 'AgendaPage'},
 { path: '/login', name: 'LoginPage', component: LoginPage },
{ path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
{ path: '/admin/ajout-spectacle', component: () => import('@/views/AjoutSpectacle.vue') },
{ path: '/admin/spectacle/:id/modifier',name: 'ModifierSpectacle',component: () => import('@/views/ModifierSpectacle.vue')
},
{
  path: '/admin/supprimer-spectacle',name: 'SupprimerSpectacle',component: SupprimerSpectacle
},
 { path: '/admin/modifier-spectacle', component: ModifierSpectacle },
 { path: '/admin/ajout-evenement', component: AjoutEvenement },
 { path: '/admin/modifier-evenement', component: ModifierEvenement },
{ path: '/admin/supprimer-evenement', component: SupprimerEvenement },
{ path: '/admin/ajout-admin', component: AjoutAdmin },
{ path: '/admin/messages-contact', component: MessagesContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

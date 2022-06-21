import {createWebHistory, createRouter} from "vue-router";
import MainPage from "@/pages/main/MainPage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";
import ServicesPage from "@/pages/services-and-prices/ServicesPage.vue";
import PortfolioPage from "@/pages/portfolio/PortfolioPage.vue";
import StylesPage from "@/pages/styles-page/StylesPage.vue";
import ContactsPage from "@/pages/contacts/ContactsPage.vue";

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage,
    },
    {
        name: 'About',
        path: '/about/',
        component: AboutPage,
    },
    {
        name: 'Services',
        path: '/services-and-prices/',
        component: ServicesPage,
    },
    {
        name: 'Portfolio',
        path: '/portfolio/',
        component: PortfolioPage,
    },
    {
        name: 'Styles',
        path: '/styles-page/',
        component: StylesPage,
    },
    {
        name: 'Contacts',
        path: '/contacts/',
        component: ContactsPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;

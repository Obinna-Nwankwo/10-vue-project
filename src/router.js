import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "./pages/ViewHome";
import IgboNames from "./pages/IgboNames";
import EventCalendar from "./pages/EventCalendar";
import viewMarkDown from "./pages/viewMarkDown";
import  viewSlider  from  "./pages/viewSlider";

const routes = [

    { path: '/', component: ViewHome },
    { path: '/igbo-names', component: IgboNames },
    { path: '/event-calendar', component: EventCalendar },
    { path: '/mark-down', component: viewMarkDown },
    { path: '/view-slider',  component:  viewSlider},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;

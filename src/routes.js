import HomePage from './pages/home.svelte';
import CollectionPage from './pages/collection.svelte';

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/collection/:name',
        component: CollectionPage,
    }
];

export default routes;
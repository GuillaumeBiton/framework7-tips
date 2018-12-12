import NotFoundPage from './pages/not-found.f7.html';
import HomePage from './pages/home.f7.html'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

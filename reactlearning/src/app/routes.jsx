import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout.jsx';
import NotFound from '../features/NotFound.jsx';

const Home = lazy(() => import('../features/home/Home.jsx'));
const About = lazy(() => import('../features/about/About.jsx'));
const Contact = lazy(() => import('../features/contact/Contact.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;


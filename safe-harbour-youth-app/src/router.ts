import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginForm from './pages/login-form';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: "login", Component: LoginForm },
      { path: "register", Component: Register },
    ],
  },
]);

export default router;

import { useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { RouteWithLayout } from './RouteWithLayout';
import MainLayout from '../layout/Main';
import HomePage from '../pages/Home/Home';
import ParceiroPage from '../pages/Parceiro/Parceiro';
import ContactPage from '../pages/Contact/Contact';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import ClientPage from '../pages/Clientes/Clientes';

export default function Index() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home')
    }
  }, [history, location])

  return (
    <Switch>
      <RouteWithLayout exact component={HomePage} layout={MainLayout} path="/home"/>
      <RouteWithLayout exact component={ParceiroPage} layout={MainLayout} path="/parceiros"/>
      <RouteWithLayout exact component={ContactPage} layout={MainLayout} path="/contact"/>
      <RouteWithLayout exact component={LoginPage} layout={MainLayout} path="/login"/>
      <RouteWithLayout exact component={RegisterPage} layout={MainLayout} path="/register"/>
      <RouteWithLayout exact component={ClientPage} layout={MainLayout} path="/client"/>
    </Switch>
  );
}

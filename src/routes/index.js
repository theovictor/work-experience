import { useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { RouteWithLayout } from './RouteWithLayout';
import MainLayout from '../layout/Main';
import HomePage from '../pages/Home/Home';
import ProfessionalPage from '../pages/Professional/Professional';
import ContactPage from '../pages/Contact/Contact';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import CompaniePage from '../pages/Companie/Companie';

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
      <RouteWithLayout exact component={ProfessionalPage} layout={MainLayout} path="/professionals"/>
      <RouteWithLayout exact component={ContactPage} layout={MainLayout} path="/contact"/>
      <RouteWithLayout exact component={LoginPage} layout={MainLayout} path="/login"/>
      <RouteWithLayout exact component={RegisterPage} layout={MainLayout} path="/register"/>
      <RouteWithLayout exact component={CompaniePage} layout={MainLayout} path="/companies"/>
    </Switch>
  );
}

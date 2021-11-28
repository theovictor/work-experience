import { useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { RouteWithLayout } from './RouteWithLayout';
import MainLayout from '../layout/Main';
import HomePage from '../pages/Home/Home';
import AboutPage from '../pages/About/About';
import ContactPage from '../pages/Contact/Contact';

export default function Index() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home')
    }
  }, [location])

  return (
    <Switch>
      <RouteWithLayout exact component={HomePage} layout={MainLayout} path="/home"/>
      <RouteWithLayout exact component={AboutPage} layout={MainLayout} path="/about"/>
      <RouteWithLayout exact component={ContactPage} layout={MainLayout} path="/contact"/>
    </Switch>
  );
}

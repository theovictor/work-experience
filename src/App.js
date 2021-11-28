import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';

function App() {
  const browserHistory = createBrowserHistory();
 
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;

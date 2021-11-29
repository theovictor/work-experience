import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer, Zoom } from 'react-toastify';
import Routes from './routes';
import "react-toastify/dist/ReactToastify.css";
import './styles/global.scss'
import 'bootstrap/scss/bootstrap.scss';

function App() {
  const browserHistory = createBrowserHistory();
 
  return (
    <Router history={browserHistory}>
      <Routes />
      <ToastContainer position="top-center" autoClose={2000} pauseOnHover={false} transition={Zoom} closeOnClick/>
    </Router>
  );
}

export default App;

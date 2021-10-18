import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navbar from './Pages/Shared/Header/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

        </Switch>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './components';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;

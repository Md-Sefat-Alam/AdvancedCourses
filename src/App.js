import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="header"></Header>

        <div className='body-container'>
          <Switch className='switch'>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>

            </Route>
            <Route path='/student-projects'>

            </Route>
            <Route path='/about'>

            </Route>
            <Route path='/*'>

            </Route>
          </Switch>
        </div>

        <Footer className='footer'></Footer>
      </Router>
    </div>
  );
}

export default App;

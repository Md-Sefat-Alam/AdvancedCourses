import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import StudentProjects from './Components/StudentProjects/StudentProjects';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';

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
              <Services></Services>
            </Route>
            <Route path='/student-projects'>
              <StudentProjects></StudentProjects>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>

        <Footer className='footer'></Footer>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from 'react-router-dom';
import Header from './HeaderFooter/Header.js';
import List from './List/List.js';
import Admin from './Admin.js';
import Footer from './HeaderFooter/Footer.js';
import Details from './DetailsPage/Details.js';
import './App.css';

class App extends React.Component {
  render() { 
    return (
      <>
      <body>
            <Router>
                <header>
                  <Header />
                  <nav>
                    <Link className="navLinks" to="/">Home</Link>
                    <Link className="navLinks" to="/admin">Admin</Link>
                  </nav>
                </header>
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <List {...routerProps} />} 
                    />
                    <Route 
                        path="/admin" 
                        exact
                        render={(routerProps) => <Admin {...routerProps} />} 
                    />
                    <Route 
                        path="/details/:id" 
                        exact
                        render={(routerProps) => <Details {...routerProps} />} 
                    />
                </Switch>
                <Footer />
            </Router>
        </body>
        </>
    )
}
}
 
export default App;
import React from 'react';
import Navbar from './components/navbar/navbar';
import Routes from './routes/routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from './components/page-wrapper/page-wrapper';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <PageWrapper>
          <Switch>
              {
                  Routes.map((route) => {
                      return <Route 
                          exact
                          key={route.path}
                          path={route.path} 
                          component={route.component}/>
                  })
              }
          </Switch>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;

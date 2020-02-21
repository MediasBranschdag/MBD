import React, { FC } from 'react';
import Navbar from './components/navbar/navbar';
import Routes from './routes/routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from './components/page-wrapper/page-wrapper';
import MBDDateProvider from './contexts/mbd-date-provider';
import MBDCompanyProvider from './contexts/mbd-company-provider';

const App: FC = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <PageWrapper>
                    <MBDCompanyProvider>
                        <MBDDateProvider>
                            <Switch>
                                {
                                    Object.values(Routes).map(route => {
                                        return <Route
                                            exact
                                            key={route.path}
                                            path={route.path}
                                            component={route.component}
                                        />
                                    })
                                }
                            </Switch>
                        </MBDDateProvider>
                    </MBDCompanyProvider>
                </PageWrapper>
            </div>
        </Router>
    );
}

export default App;

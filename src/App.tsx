import React, { FC } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Routes from './routes/routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from './components/page-wrapper/page-wrapper';
import MBDDateProvider from './contexts/mbd-date-provider';
import MBDCompanyProvider from './contexts/mbd-company-provider';
import { theme } from './theme/material-ui'
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import ScrollToTop from "./hooks/scrollToTop"
import ScrollToHash from "./hooks/scrollToHash"
import background from "./assets/master_background.png"


const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                    <Navbar />
                    <PageWrapper>
                        <MBDCompanyProvider>
                            <MBDDateProvider>
                                <ScrollToTop/>  {/* Scrolls to top on route change */}
                                <ScrollToHash/>  {/* Scrolls to specific section on hash change */}
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
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

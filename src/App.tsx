import React, { FC } from 'react';
import Navbar from './components/navbar/navbar';
import Routes from './routes/routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from './components/page-wrapper/page-wrapper';
import MBDDateProvider from './contexts/mbd-date-provider';
import MBDCompanyProvider from './contexts/mbd-company-provider';
import { theme } from './theme/material-ui'
import { ThemeProvider } from '@material-ui/core/styles';
import Temppage from './pages/home-page/home-page';

const App: FC = () => {
    return (
        <div>Page under construction!</div>
    );
}

export default App;

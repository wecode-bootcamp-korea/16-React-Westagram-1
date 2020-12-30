import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import LoginTaeHyung from './Pages/taehyungkim/Login/Login';
import MainTaeHyung from './Pages/taehyungkim/Main/Main';
import LoginDongHa from './Pages/donghalee/Login/Login';
import MainDongHa from './Pages/donghalee/Main/Main';
import LoginSeungHwan from './Pages/seunghwankim/Login/Login';
import MainSeungHwan from './Pages/seunghwankim/Main/Main';
import LoginKiYeol from './Pages/KiyeolKim/Login/Login';
import MainKiYeol from './Pages/KiyeolKim/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login-taehyung" component={LoginTaeHyung} />
                    <Route exact path="/main-taehyung" component={MainTaeHyung} />
                    <Route exact path="/login-dongha" component={LoginDongHa} />
                    <Route exact path="/main-dongha" component={MainDongHa} />
                    <Route exact path="/login-seunghwan" component={LoginSeungHwan} />
                    <Route exact path="/main-seunghwan" component={MainSeungHwan} />
                    <Route exact path='/login-kiyeol' component={LoginKiYeol} />
                    <Route exact path="/main-kiyeol" component={MainKiYeol} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;
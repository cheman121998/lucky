import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//import { getUsers, createUser, updateUser, deleteUser } from './api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignUp from './components/Signup';
import WelcomePage from './components/WelcomePage';
import SignIn from './components/Signin';
import Homepage from './components/Homepage';
//import SearchPlayer from './components/Search';
import Playing from './components/Playing';

function App() {
    return (
        <Router basename="cheman121998.github.io/">
            <div className="App">
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/welcomepage" component={WelcomePage} />
                    <Route path="/homepage" component={Homepage} />
                    {/* <Route path="/searchplayer" component={SearchPlayer} /> */}
                    <Route path="/playing" component={Playing} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;

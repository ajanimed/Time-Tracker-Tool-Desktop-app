import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './screens/Login/Login';
import DefaultLayout from './containers/DefaultLayout';
class App extends Component {

    render() {
        let routes =(
            <Switch>
                <Route exact path="/" name="Login Page" component={Login} />
                <Redirect to="/"/>
            </Switch>
        );
        if(this.props.isAuthenticated){
            routes =(
                <Switch>
                    <Route path="/" name="Home" component={DefaultLayout} />
                    <Redirect to="/"/>
                </Switch>
            );
        }
        return (
            <HashRouter>
                {routes}
            </HashRouter>
        );
    }
}
let mapStateToProps = state =>{
    return{
        isAuthenticated: state.accessToken !==null,
    };
};
export default connect(mapStateToProps,null)(App);

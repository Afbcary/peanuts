import React from "react";
import { AuthService } from "../services/AuthService";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.authService = new AuthService();
        this.state = { user: {} };
    }

    login = () => {
        console.log('login');
        this.authService.login();
    };

    logout = () => {
        console.log('logout');
        this.authService.logout();
    };

    getUser = () => {
        console.log('get user');
        this.authService.getUser().then(user => {
            if (user) {
                console.log('User has been successfully loaded from store.');
            } else {
                console.error('You are not logged in.');
            }
            this.setState({ user });
        });
    };
    render() {
        return (
            <div>
                <button onClick={() => this.login()}>Log in</button>
                <button onClick={() => this.logout()}>Log Out</button>
                <button onClick={() => this.getUser()}>Get User</button>
            </div >
        );
    }
}


import React from "react";
import { AuthService } from "../services/AuthService";

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.authService = new AuthService();
        this.state = { user: {} };
    }


    render() {
        return (
            <div>
                home
            </div >
        );
    }
}


import React from 'react';
import UserInfo from './UserInfo';
import LoginForm from './LoginForm';

class LoginControl extends React.Component {
    constructor() {
        super();
        this.state = { user: undefined };
    }

    handleLogin(name) {
        this.setState({ user: { name }});
    }

    render() {
        if (this.state.user)
            return <UserInfo user={this.state.user} />
        return <LoginForm onLogin={name => this.handleLogin(name)} />;
    }
}

export default LoginControl;
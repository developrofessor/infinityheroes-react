import React from 'react';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = { loading: false };
    }
    handleLogin() {
        const name = prompt('Whats your name?');
        this.setState({ loading: true });
        setTimeout(() => {
            this.props.onLogin(name);
        }, 2000);
    }

    render() {
        if (this.state.loading)
            return <p>Loading...</p>;
        return <button onClick={() => this.handleLogin()}>Log In</button>;
    }
}

export default LoginForm;
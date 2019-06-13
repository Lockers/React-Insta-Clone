import React from 'react';

export default function withAuthenticate (Component) {
    return class Authentication extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthed: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('Lockers')) {
                this.setState({ isAuthed: true });
            }
        }
        login = () => {
            localStorage.setItem('Lockers', true)
            this.setState({ isAuthed: true });
        }
        logout = () => {
            localStorage.removeItem('Lockers')
            this.setState({ isAuthed: false })
        }

        render() {
            return (
                <Component
                    isAuthed={this.state.isAuthed}
                    login={this.login}
                    logout={this.logout}
                />
            );
        }
    }
}
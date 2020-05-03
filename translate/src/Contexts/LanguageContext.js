import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = {
        language: 'english'
    }

    onChangeLanguage = language => {
        this.setState({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, action: this.onChangeLanguage }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
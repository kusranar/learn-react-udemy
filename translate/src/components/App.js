import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';
import UserCreate from './UserCreate';

class App extends React.Component {
    state = {
        language: 'english'
    }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language :
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                {/* <LanguageContext.Provider value="dutch">
                    <UserCreate />
                </LanguageContext.Provider>

                <UserCreate /> */}
            </div>
        )
    }
}

export default App;
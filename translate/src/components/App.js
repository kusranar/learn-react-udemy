import React from 'react';
import { LanguageStore } from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    // state = {
    //     language: 'english'
    // }

    // onLanguageChange = language => {
    //     this.setState({ language });
    // }

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
                    <ColorContext.Provider value="red">
                        {/* <LanguageContext.Provider value={this.state.language}> */}
                        <UserCreate />
                        {/* </LanguageContext.Provider> */}
                    </ColorContext.Provider>
                </LanguageStore>
                {/* <LanguageContext.Provider value="dutch">
                    <UserCreate />
                </LanguageContext.Provider>

                <UserCreate /> */}
            </div>
        )
    }
}

export default App;
import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

class Button extends React.Component {
    // this
    // must contextType
    // static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`} >
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : ' Voorleggen';

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

// or this
// Button.contextType = LanguageContext;

export default Button;
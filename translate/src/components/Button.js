import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

class Button extends React.Component {
    // this
    // must contextType
    // static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`} >
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
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
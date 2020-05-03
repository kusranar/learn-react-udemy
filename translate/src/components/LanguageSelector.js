import React from 'react';
import LangaugeContext from '../Contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LangaugeContext;

    render() {
        return (
            <div>
                Select a language :
                <i
                    className="flag us"
                    onClick={() => this.context.action('english')}
                />
                <i
                    className="flag nl"
                    onClick={() => this.context.action('dutch')}
                />
            </div>
        )
    }
}

export default LanguageSelector;
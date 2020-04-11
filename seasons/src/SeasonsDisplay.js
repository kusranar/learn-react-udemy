import React from 'react';
import './SeasonsDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        icon: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        icon: 'snowflake'
    }
}

const getSession = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const seasons = getSession(props.lat, new Date().getMonth());
    const { text, icon } = seasonConfig[seasons];
    return (
        <div className={`seasons-display ${seasons}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;
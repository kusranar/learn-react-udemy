import React from 'react';

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
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;
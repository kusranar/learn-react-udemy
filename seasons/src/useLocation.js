import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLat(position.coords.latitude);
            },
            err => {
                setErrMsg(err.message);
            }
        )
    }, []);

    return { lat, errMsg };
}
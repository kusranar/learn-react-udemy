import { useState, useEffect } from 'react';
import axios from 'axios';

export default resource => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const abc = resource;
        (async () => {
            const response = await axios.get(`http://jsonplaceholder.typicode.com/${abc}`);
            setResources(response.data)
        })(abc);
    }, [resource]);

    return resources;
};

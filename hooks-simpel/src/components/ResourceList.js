import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    // const fetchResource = async () => {
    //     const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    //     setResources(response.data);
    // }

    return (
        <ul>
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    );
}

export default ResourceList;
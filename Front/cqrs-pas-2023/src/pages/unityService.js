import axios from 'axios';
import { useState, useEffect } from 'react';

const UnityService = ({ match }) => {
const [unityService, setUnityService] = useState(null);

useEffect(() => {
    axios.get(`/unityService/${match.params.id}`)
        .then(res => setUnityService(res.data))
        .catch(err => console.log(err));
}, [match.params.id]);

if (!unityService) {
    return <div>Loading...</div>;
}

return (
    <div>
        <h2>{unityService.name}</h2>
        <p>Array of Unity Service: {unityService.arrayUnityService}</p>
        <p>Number of Unity Service: {unityService.numUnityService}</p>
    </div>
);
};

export default UnityService;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EquipeSaude = (props) => {
const [equipeSaude, setEquipeSaude] = useState(null);

useEffect(() => {
axios
    .get(`/equipeSaude/${props.match.params.id}`)
    .then((res) => setEquipeSaude(res.data))
    .catch((err) => console.log(err));
}, []);

if (!equipeSaude) {
return <div>Loading...</div>;
}

return (
    <div>
        <h2>{equipeSaude.name}</h2>
        <p>Array of Equipes: {equipeSaude.arrayEquipes}</p>
        <p>Number of Equipes: {equipeSaude.numEquipes}</p>
    </div>
    );
};

export default EquipeSaude;
import axios from 'axios';

const PacienteService = { getPaciente: (id) => {

return axios.get(`http://localhost:3000/api/paciente/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}
};

export default PacienteService;
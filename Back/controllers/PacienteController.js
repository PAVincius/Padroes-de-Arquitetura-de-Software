import { Paciente } from '../models/Paciente';

const PacienteController = {
getPaciente: (req, res) => {
const { id } = req.params;
const paciente = Paciente(p => p.id === id);

if (!paciente) {
    return res.status(404).json({ error: 'Paciente not found' });
}

return res.json(paciente);
}
};

export default PacienteController;
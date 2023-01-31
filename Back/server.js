const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PacienteController = require('./controllers/PacienteController').default;

app.prepare().then(() => {
const server = express();

server.get('*', (req, res) => {
    return handle(req, res);
});

// Express routes
server.get('/paciente/:id', (req, res) => {
    Paciente.findById(req.params.id)
        .then(paciente => res.json(paciente))
        .catch(err => res.status(404).json({ success: false }));
});

server.post('/paciente', (req, res) => {
    const newPaciente = new Paciente({
        typeAttendance: req.body.typeAttendance,
        medicalRecord: req.body.medicalRecord,
        situation: req.body.situation,
        action: req.body.action
    });

    newPaciente.save()
        .then(paciente => res.json(paciente))
        .catch(err => res.status(404).json({ success: false }));
});

server.put('/paciente/:id', (req, res) => {
    Paciente.findByIdAndUpdate(req.params.id, req.body)
        .then(paciente => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});

server.delete('/paciente/:id', (req, res) => {
    Paciente.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
});
});
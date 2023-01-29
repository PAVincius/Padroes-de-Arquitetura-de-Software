const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PacienteController = require('./controllers/PacienteController').default;

app.prepare().then(() => {
const server = express();

server.get('/api/paciente/:id', PacienteController.getPaciente);

server.get('*', (req, res) => {
    return handle(req, res);
});

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
});
});
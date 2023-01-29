import React from 'react';
import { useRouter } from 'next/router';
import PacienteService from '../services/PacienteService';

export default function Paciente(props) {
    const Paciente = () => {
        const router = useRouter();
        const { id } = router.query;
    }

    const paciente = PacienteService.getPaciente(id);

    return (
        <div>
            <p>ID: {paciente.id}</p>
            <p>Type of Attendance: {paciente.typeAttendance}</p>
            <p>Medical Record: {paciente.medicalRecord}</p>
            <p>Situation: {paciente.situation}</p>
            <p>Action: {paciente.action}</p>
        </div>
    );
}
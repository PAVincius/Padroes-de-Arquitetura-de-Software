import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicalRecord = (props) => {
  const [medicalRecord, setMedicalRecord] = useState(null);

  useEffect(() => {
    axios.get(`/medicalRecord/${props.match.params.id}`)
      .then(res => setMedicalRecord(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  if (!medicalRecord) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{medicalRecord.name}</h2>
      <p>Sex: {medicalRecord.sex}</p>
      <p>Birthdate: {medicalRecord.birthdate}</p>
      <p>Farther's Name: {medicalRecord.fathername}</p>
      <p>Mother's Name: {medicalRecord.mothername}</p>
    </div>
  );
};

export default MedicalRecord;
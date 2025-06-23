import type { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientsDetailsProps = {
  patient: Patient;
};

export default function PatientsDetails({ patient }: PatientsDetailsProps) {
  return (
    <div className="mx-5 my-11 px-5 py-8 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="ID: " data={patient.id} />
      <PatientDetailsItem label="Name: " data={patient.name} />
      <PatientDetailsItem label="Propietario: " data={patient.caretaker} />
      <PatientDetailsItem label="Email: " data={patient.email} />
      <PatientDetailsItem label="Fecha Alta: " data={patient.date.toString()} />

      <div className="flex justify-between mt-5">
        <button type="button" className="bg-indigo-600 text-white px-10 py-2 hover:bg-indigo-700 font-bold uppercase rounded-lg">Editar</button>
        <button type="button" className="bg-red-600 text-white px-10 py-2 hover:bg-red-700 font-bold uppercase rounded-lg">Eliminar</button>
      </div>

    </div>
  );
}

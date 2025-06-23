import { usePatientStore } from "../store";
import PatientsDetails from "./PatientsDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:3/5 ">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes{" "}
          </h2>
          <p className="text-x mt-5 text-center">
            {" "}
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
            {patients.map((patient) => (
              <PatientsDetails key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      ) : (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

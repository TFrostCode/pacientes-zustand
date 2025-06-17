import type { Patient } from "../types";

type PatientsDetailsProps = {
  patient: Patient;
};

export default function PatientsDetails({ patient }: PatientsDetailsProps) {
  return <div>{patient.name}</div>;
}

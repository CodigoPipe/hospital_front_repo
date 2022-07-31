import { getAllSpecialities, getAllPatients} from "./actions.js";
import {specialityI, patientI} from "./interfaces.js"

//get and create all specialities
export function getAndCreateSpecialities(){
    getAllSpecialities().then(specialities =>{
        createAllSpecialities(specialities)
    })
}


function createAllSpecialities(specialities: specialityI[]){

    specialities.forEach(speciality =>{
      createSpeciality(speciality)
  })
}

function createSpeciality(speciality: specialityI){
   
    const createdSpecialitiesDiv = document.querySelector('#created-specialities-son') as HTMLDivElement

    const newDiv:HTMLDivElement = document.createElement('div');
    newDiv.className = 'forms'
    
    const h2SpecialityName: HTMLHeadElement = document.createElement('h2');
    h2SpecialityName.className = "h2-titles"
    h2SpecialityName.innerText = `Speciality Name: ${speciality.name}`

    const h2PhysicianName: HTMLHeadElement = document.createElement('h2');
    h2PhysicianName.className = "h2-titles"
    h2PhysicianName.innerText = `Physician Name: ${speciality.physician}`

    const h2SpecialityId: HTMLHeadElement = document.createElement('h2');
    h2SpecialityId.className = "h2-titles"
    h2SpecialityId.innerText = `Speciality Id: ${speciality.specialityId}`

    newDiv.append(h2SpecialityName, h2PhysicianName , h2SpecialityId)
    createdSpecialitiesDiv.append(newDiv)

}

//get and create all patient
export function getAndCreatePatients(){
    getAllPatients().then(patients =>{
        createAllPatients(patients)
    })
}


function createAllPatients(patients: patientI[]){

      patients.forEach(patient =>{
      createPatient(patient)
  })
}

function createPatient(patient: patientI){
   
    const createdPatientsDiv = document.querySelector('#created-patients-son') as HTMLDivElement

    const newDiv:HTMLDivElement = document.createElement('div');
    newDiv.className = 'forms'

    const h2PatientId: HTMLHeadElement = document.createElement('h2');
    h2PatientId.className = "h2-titles"
    h2PatientId.innerText = `Patient Id: ${patient.patientId}`
    
    const h2PatientName: HTMLHeadElement = document.createElement('h2');
    h2PatientName.className = "h2-titles"
    h2PatientName.innerText = `Patient Name: ${patient.name}`

    const h2PatientAge: HTMLHeadElement = document.createElement('h2');
    h2PatientAge.className = "h2-titles"
    h2PatientAge.innerText = `Patient Age: ${patient.age}`

    const h2PatientDni: HTMLHeadElement = document.createElement('h2');
    h2PatientDni.className = "h2-titles"
    h2PatientDni.innerText = `Patient DNI: ${patient.dni}`

    const h2PatientAppointments: HTMLHeadElement = document.createElement('h2');
    h2PatientAppointments.className = "h2-titles"
    h2PatientAppointments.innerText = `Patient Appointment: ${patient.numberOfAppointments}`

    // const h2PatientSpeciality: HTMLHeadElement = document.createElement('h2');
    // h2PatientSpeciality.className = "h2-titles"
    // h2PatientSpeciality.innerText = `Patient speciality ID: ${patient.speciality.specialityId}`


    newDiv.append(h2PatientId, h2PatientName , h2PatientAge, h2PatientDni, h2PatientAppointments );
    createdPatientsDiv.append(newDiv);

}

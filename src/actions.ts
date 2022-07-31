import { specialityI,patientI } from "./interfaces"



// methods for specialities

export async function getAllSpecialities() {

  const response:Response = await fetch('http://localhost:8080/api/v1/specialities')
  const data:specialityI[] = await response.json()

  return data
} 

export async function postSpeciality(speciality:specialityI){

  const response:Response = await fetch('http://localhost:8080/api/v1/create/speciality', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(speciality)
  })

  return response;
}

export async function deleteSpeciality(id:string){

  const response:Response = await fetch(`http://localhost:8080/api/v1/delete/speciality/${id}`, 
  {
    method: 'DELETE'
  })

  return response;
}

export async function putSpeciality(speciality:specialityI){
  const response:Response = await fetch('http://localhost:8080/api/v1/update/speciality', 
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(speciality)
  })

  return response;
}


// methods for patients
export async function getAllPatients() {
    const response:Response = await fetch('http://localhost:8080/api/v1/patients')
  
    const data:patientI[] = await response.json()
  
    return data
  } 
  
  export async function postPatient(patient:patientI){
    const response:Response = await fetch('http://localhost:8080/api/v1/create/patient', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(patient)
    })
  
    return response;
  }
  
  export async function deletePatient(id:string){
    const response:Response = await fetch(`http://localhost:8080/api/v1/delete/patient/${id}`, 
    {
      method: 'DELETE'
    })
  
    return response;
  }
  
  export async function putPatient(patient:patientI){
    const response:Response = await fetch('http://localhost:8080/api/v1/update/patient', 
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(patient)
    })
  
    return response;
  }





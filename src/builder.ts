import { getAllSpecialities} from "./actions.js";
import {specialityI} from "./interfaces.js"


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


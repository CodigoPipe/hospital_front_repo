import { getAllPatients, getAllSpecialities } from "./actions.js";
import { getAndCreateSpecialities, getAndCreatePatients } from "./builder.js";



const getAllSpecialitiesButton = document.querySelector("#get-specialities-button") as HTMLButtonElement;
getAllSpecialitiesButton.addEventListener("click", getAndCreateSpecialities)

const getAllPatientsButton = document.querySelector("#get-patients-button") as HTMLButtonElement;
getAllPatientsButton.addEventListener("click", getAndCreatePatients);


// getAllPatients().then(patient =>{
    //     console.log(patient)
    // })
    
    
    // getAllPatients().then(patient =>{
    //     console.log(patient)
    // })


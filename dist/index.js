import { getAndCreateSpecialities, getAndCreatePatients } from "./builder.js";
const getAllSpecialitiesButton = document.querySelector("#get-specialities-button");
getAllSpecialitiesButton.addEventListener("click", getAndCreateSpecialities);
const getAllPatientsButton = document.querySelector("#get-patients-button");
getAllPatientsButton.addEventListener("click", getAndCreatePatients);
// getAllPatients().then(patient =>{
//     console.log(patient)
// })
// getAllPatients().then(patient =>{
//     console.log(patient)
// })

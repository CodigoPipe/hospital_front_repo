


export interface speciality{

    name: string,
    physician: string,
    specialityId: number|null

}



export interface patient{

    patientId: number|null,
    name: string,
    age: number,
    dni: number,
    speciality: {
        specialityId: number
    }


}
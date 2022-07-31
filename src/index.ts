
export interface specialityI{

    name: string,
    physician: string,
    specialityId: number|null

}



export interface patientI{

    patientId: number|null,
    name: string,
    age: number,
    dni: number,
    speciality: {
        specialityId: number
    }

}




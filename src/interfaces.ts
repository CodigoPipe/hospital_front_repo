

export interface specialityI{

    name: string,
    physician: string,
    specialityId: number|null,
    patients: patientI[]|null

}

export interface patientI{

    patientId: number|null,
    name: string,
    age: number,
    dni: number,
    numberOfAppointments: null|number,
    // speciality: {
    //     specialityId: number
    // }

}
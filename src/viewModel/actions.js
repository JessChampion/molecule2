export const CREATE_DEFAULT_VM = 'CREATE_DEFAULT_VM';
export const CREATE_INDIVIDUAL_VM = 'CREATE_INDIVIDUAL_VM';

export function createDefaultViewModel(people) {
    return {
        type: CREATE_DEFAULT_VM,
        people
    };
}



export function createIndividualViewModel(people, target) {
    console.log('create action');
    return {
        type: CREATE_INDIVIDUAL_VM,
        people,
        target
    };
}
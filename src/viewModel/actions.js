export const CREATE_VIEW_MODEL = 'CREATE_VIEW_MODEL';

export function createViewModel(people) {
    return {
        type: CREATE_VIEW_MODEL,
        people
    };
}
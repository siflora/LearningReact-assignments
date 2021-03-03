const initalState = {
    persons: []
};

const reducer = (state=initalState, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
            const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
            }
            const updatedPersons = state.persons.concat(newPerson);
            return {
                ...state,
                persons: updatedPersons
            }
        case 'DELETE_PERSON':
            const remainPersons = state.persons.filter(remainPerson=> remainPerson.id !== action.personId)
            return {
                ...state,
                persons: remainPersons
            }
        default:
            return state;
    }
    return state;
};

export default reducer;
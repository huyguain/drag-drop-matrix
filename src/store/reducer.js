const initialState = {
    matrix: [],
    nount: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_MATRIX':
            return { ...state, matrix: action.payload }
        case 'SET_NOUNT':
            return { ...state, nount: action.payload }
        default:
            throw new Error()
    }
}

export { reducer, initialState }

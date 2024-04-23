// reducer.js

const initialState = {
    loading: false,
    imageUrl: '',
    error: null
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_IMAGE':
            return { ...state, loading: true, error: null };
        case 'SET_IMAGE':
            return { ...state, loading: false, imageUrl: action.payload };
        case 'SET_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default imageReducer;

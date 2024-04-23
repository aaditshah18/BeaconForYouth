// actions.js

export const loadImage = () => ({
    type: 'LOAD_IMAGE'
});

export const setImage = (url) => ({
    type: 'SET_IMAGE',
    payload: url
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
});

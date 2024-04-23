// ImageLoader.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadImage, setImage, setError } from './actions';

function ImageLoader({ src }) {
    const { imageUrl, loading, error } = useSelector(state => state.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImage());
        fetch(src)
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                dispatch(setImage(url));
            })
            .catch(err => {
                dispatch(setError('Failed to load image'));
            });
    }, [src, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading image!</p>;

    return <img src={imageUrl} alt="Loaded" />;
}

export default ImageLoader;

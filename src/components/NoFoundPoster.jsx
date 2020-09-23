import React from 'react';
import image from '../assets/icons/image.svg';

const NoFoundPoster = () => {
    return(
        <div className="block-imagen_nofound">
            <img src={image} alt="No found"/>
        </div>
    );
}

export default NoFoundPoster;
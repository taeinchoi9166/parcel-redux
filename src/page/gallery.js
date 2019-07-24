import React from 'react';
import {Template} from '../Components/commons/Template';
import GalleryContainer from '../Containers/GalleryContainer';

const Gallery = ({match}) => (
    <Template>
        <GalleryContainer match={match}/>
    </Template>
);

export default Gallery;
import React from 'react';
import './Image.css';
import ArchesImage from '../assets/arches-np.png'

const archesImage = (props) => (
    <div className="img">
        <img src={ArchesImage} className="archesImg" />
    </div>
)

export default archesImage;
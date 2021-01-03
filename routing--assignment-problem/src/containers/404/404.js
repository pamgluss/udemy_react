import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => (
    <div>
        <h1> The webpage you're looking for isn't here!</h1>
        <NavLink to='/'>Go Home</NavLink>
    </div>
);

export default NotFound;
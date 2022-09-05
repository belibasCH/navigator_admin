import React from 'react'
import { NavLink } from 'react-router-dom';

function ListItem({link, text, icon}) {
    return (

        <NavLink
            to={link}
            className={({ isActive }) =>
                (isActive ? 'flex mb-2 bg-secondary-400 text-primary-100 flex justify-left align-center w-full h-12' :  "  mb-2 flex h-12  ")}>
                    <div className='p-2 flex place-items-center' >{icon}</div>
                    <div className='flex place-items-center'>{text}</div>
                    
            
        </NavLink>




    )
}

export default ListItem
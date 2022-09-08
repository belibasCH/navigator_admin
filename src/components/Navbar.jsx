import React from 'react'
import ListItem from './ListItem'
import { HomeIcon } from '@heroicons/react/24/outline'
import { PresentationChartBarIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    return (
        <header className="fixed w-screen">
            <div className='flex h-12 w-full bg-primary-100 justify-between'>
                <p className='flex p-2 place-items-center text-primary-200 text-primary-200'>logo</p>
                <div className='flex p-2 place-items-center'>
                    <p className='text-primary-200 p-2'>Admin</p>
                    <div><UserCircleIcon className="h-7 w-7 text-primary-200" /></div>
                </div>

            </div>
        
        </header>
    )
}

export default Navbar

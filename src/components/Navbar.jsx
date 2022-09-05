import React from 'react'
import ListItem from './ListItem'
import { HomeIcon } from '@heroicons/react/24/outline'
import { PresentationChartBarIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    return (
        <header className="fixed h-screen w-screen">
            <div className='flex h-12 w-full bg-primary-100 justify-between'>
                <p className='flex p-2 place-items-center text-primary-200 text-primary-200'>logo</p>
                <div className='flex p-2 place-items-center'>
                    <p className='text-primary-200 p-2'>Admin</p>
                    <div><UserCircleIcon className="h-7 w-7 text-primary-200" /></div>
                </div>

            </div>
            <nav className="h-full w-52 border-t-8 border-black border-solid flex flex-row bg-secondary-200 " >
                <ul className="flex flex-col h-full w-full">
                    <ListItem link="/" text="Dashboard" icon={<HomeIcon className="h-5 w-5 text-blue-500" />} />
              
                    <ListItem link="/Navigatoren" text="Navigatoren" icon={<PresentationChartBarIcon className="h-5 w-5 text-blue-500" />} />
                    <ListItem link="/Neu" text="Navigator erstellen" icon={<PresentationChartBarIcon className="h-5 w-5 text-secondary-200" />} />
               
                    <ListItem link="/User" text="User" icon={<UserIcon className="h-5 w-5 text-blue-500" />} />
             
                    <ListItem link="/Abo" text="Abo" icon={<CurrencyDollarIcon className="h-5 w-5 text-blue-500" />} />



                </ul>

            </nav>
        </header>
    )
}

export default Navbar

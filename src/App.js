import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import './App.css';

import ListItem from './components/ListItem'
import { HomeIcon } from '@heroicons/react/24/outline'
import { PresentationChartBarIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'




const App = () => {
 

    return (
        <BrowserRouter>
                <Navbar />
                <div className="flex h-screen pt-12">
                <nav className="h-full w-52  border-solid flex flex-row bg-secondary-200 " >
                <ul className="flex flex-col h-full w-full">
                    <ListItem link="/" text="Dashboard" icon={<HomeIcon className="h-5 w-5 text-blue-500" />} />
                    <ListItem link="/Navigatoren" text="Navigatoren" icon={<PresentationChartBarIcon className="h-5 w-5 text-blue-500" />} />
                    <ListItem link="/Neu" text="Navigator erstellen" icon={<PresentationChartBarIcon className="h-5 w-5 text-secondary-200" />} />
                    <ListItem link="/User" text="User" icon={<UserIcon className="h-5 w-5 text-blue-500" />} />
                    <ListItem link="/Abo" text="Abo" icon={<CurrencyDollarIcon className="h-5 w-5 text-blue-500" />} />
                </ul>
            </nav>
                <main className="h-full p-8 w-full">
                  
                        <Routes>
                            <Route path="/" element={<Dashboard/>} />
                            
                        </Routes>
                   
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
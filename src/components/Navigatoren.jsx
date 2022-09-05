import React from 'react'
import NavigatorEinzeln from './NavigatorEinzeln'

function Navigatoren() {
    return (<div className='flex flex-col w-full'>
    <h1>Navigatoren</h1>
    <h2>Generis Allgemein</h2>
        <div className="flex flex-wrap gap-5">
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>
        </div>

        <h2>Tourismusentwicklung</h2>
        <div className="flex flex-wrap ">
            
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>
            <NavigatorEinzeln></NavigatorEinzeln>


        </div>

    </div>

    )
}

export default Navigatoren

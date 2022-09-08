import React, { useState } from 'react'
import NavigatorOverview from './NavigatorOverview'


let server_url = "localhost:8080/server";
const Dashboard = () => {
    const [answer, setPoll] = useState([
        {
            "id": "gg",
            "person": {
                "name": "",
                "company": "",
                "email": "",
                "tel": ""
            },
            "projekt": {
                "projektname": "",
                "projektbeschreibung": "",
                "zielgruppe": "",
                "ziel": ""
            },
            "tool": {
                "id": 1,
                "angebot": {
                    "afrage": "Was sind die öffentlich zugänglichen Angebote?",
                    "a": "",
                    "bfrage": "Was sind die privatwirtschaftlichen Angebote?",
                    "b": "",
                    "cfrage": "Was für Angebote werden zusätzlich benötigt?",
                    "c": "",
                    "dfrage": "Wie wichtig sind die Angebote zur Erreichung des Ziels?",
                    "d": "0"
                },
                "rahmenbedingungen": {
                    "afrage": "Welche Rahmenbedingungen sind für Sie relevant und beeinflussbar?",
                    "a": "",
                    "bfrage": "Welche Rahmenbedingungen sind für Sie relevant und nicht beeinflussbar?",
                    "b": "",
                    "cfrage": "Was müsste sich in den Rahmenbedingungen ändern, um Ihr Ziel zu erreichen?",
                    "c": "",
                    "dfrage": "Wie wichtig sind die Rahmenbedingungen für die Zielerreichung?",
                    "d": "0"
                },
                "geisteshaltung": {
                    "afrage": "Welche Haltung und Motivation haben die Befürworter der Zielsetzung?",
                    "a": "",
                    "bfrage": "Welche Haltung und Motivation haben die Gegner der Zielsetzung?",
                    "b": "",
                    "cfrage": "Was müsste sich in der Haltung und Motivation verändern, um das Ziel zu erreichen?",
                    "c": "",
                    "dfrage": "Wie wichtig ist diese Veränderung zur Erreichung des Ziels?",
                    "d": "0"
                },
                "kompetenz": {
                    "afrage": "Welche Wissen und Fertigkeiten sind bereits vorhanden?",
                    "a": "",
                    "bfrage": "Welche Wissen und Fertigkeiten werden zusätzlich benötigt?",
                    "b": "",
                    "cfrage": null,
                    "c": null,
                    "dfrage": "Wie wichtig sind Wissen und Fertigkeiten zur Erreichung des Ziels",
                    "d": "0"
                },
                "infrastruktur": {
                    "afrage": "Welche digitale Infrastruktur ist bereits vorhanden?",
                    "a": "",
                    "bfrage": "Welche physische Infrastruktur ist bereits vorhanden?",
                    "b": "",
                    "cfrage": "Was für Infrastruktur wird zusätzlich benötigt?",
                    "c": "",
                    "dfrage": "Wie wichtig ist die physische Infrastruktur für die Erreichung der Ziele?",
                    "d": "0"
                },
                "kommunikation": {
                    "afrage": "Beschreiben Sie die Kommunikation nach innen mit involvierten Personen/Organisationen",
                    "a": "",
                    "bfrage": "Beschreiben Sie die Kommunikation nach aussen",
                    "b": "",
                    "cfrage": "Wie müsste die Kommunikation verbessert werden, um das Ziel zu erreichen?",
                    "c": "",
                    "dfrage": "Wie wichtig ist die Kommunikation zur Erreichung des Ziels?",
                    "d": "0"
                }
            }
        }
    ]);
    const [waiting, setWaiting] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getAnswer = async () => {
        try {
            const response = await fetch(
                "http://" + server_url + "/navigators"
            );
            if (response.ok) {
                const polls = await response.json();
                setPoll(polls);
                setWaiting(false);
                console.log(answer);
            }

        } catch (error) {
            setErrorMessage("Error! Server is not available");
        }
    };



    return (<>
        <div className="flex justify-between w-full">
            <h1>Dashboard</h1>
            <button onClick={getAnswer} className="hover:animate-pulse bg-primary-100 font-medium hover:bg-blue-700 px-10 py-4 text-primary-200" >Resultate herunterladen</button>
        </div>
        <div>
        {answer.map((index)=>{
         return <NavigatorOverview navigator={index} />
     })}
        </div>

    </>

    )



}

export default Dashboard

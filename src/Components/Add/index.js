import React, { useState } from "react";
import { Input } from "antd";
import Select from "../Select";

export default function Add() {

    const [newInput, setNewInput] = useState([<Input placeholder="Github Repository" onChange={settingURL} />])

    // team
    const [projectType, setProjectType] = useState(Boolean);

    // week
    const weeks = [];
    for (let week = 1; week < 13; week++) {weeks.push(week);}
    const [week, setWeek] = useState(0)

    // days
    const days = [];
    for (let day = 1; day < 6; day++) {days.push(day);}
    const [day, setDay] = useState(0)

    // projectName
    const [projectName, setProjectName] = useState("")

    // url
    const [url, setUrl] = useState([])
    

    function onProjectTypeChange(e) {
        console.log(`It is ${e.target.value}`);
        setProjectType(e.target.value);
    }

    function makeAnotherInput(e){
        if(newInput.length > 0){
            e.preventDefault();
            setNewInput([
                ...newInput,
                <Input placeholder="Add URL" onChange={settingURL} />,
            ]);
        } else {
            window.alert("No URL at all?")
        }
    }

    function settingURL(e){
        setUrl([...url, e.target.value])
    }

    // when add project to the list button clicked, the info from projectName inputs should setProjectName. 
    function settingProjectName(e) {
        setProjectName(e.target.value);
    }
    
    function handleChangeDay(e) {
        setDay(e.target.value)
    }

    function handleChangeWeek(e) {
        setWeek(e.target.value)
    }

    // when button clicked, the info from inputs and select should be added to a database
    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("http://localhost:5432/projects/", {
            method: "POST",
            // credentials: 'include',
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({projectType, week, day, projectName, url}),
        });
console.log(url)
    }

   

    return (
        <section className="addProject">
            <h2>Add your project</h2>
            <form onSubmit={handleSubmit}>
                <Select handleChangeWeek={handleChangeWeek} handleChangeDay={handleChangeDay} projectType={projectType} onProjectTypeChange={onProjectTypeChange} weeks={weeks} days={days}/>
                <br />
                <Input placeholder="Project Name" onChange={settingProjectName} />
                {newInput.map((input) => input) /* <-- adding more input box */}
                <button
                    className="addURLButton"
                    onClick={makeAnotherInput}
                >add more URL</button>
                <button style={{ color: "black" }} 
                // onClick={handleSubmit}
                >
                    add project to the list
                </button>
            </form>
        </section>
    );
}

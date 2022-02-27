import React, { useState } from "react";
import { Input } from "antd";
import Select from "../Select";

export default function Add({ posted, setPosted }) {
    const [newInput, setNewInput] = useState([
        <Input placeholder="Github Repository" onChange={settingURL} />,
    ]);

    // team
    const [projectType, setProjectType] = useState(Boolean);

    // week
    const weeks = [];
    for (let week = 1; week < 13; week++) {
        weeks.push(week);
    }
    const [week, setWeek] = useState(0);

    // days
    const days = [];
    for (let day = 1; day < 6; day++) {
        days.push(day);
    }
    const [day, setDay] = useState(0);

    // projectName
    const [projectName, setProjectName] = useState("");

    // status
    const [projectStatus, setProjectStatus] = useState("");

    // url
    const [url, setUrl] = useState([]);

    function onProjectTypeChange(e) {
        setProjectType(e.target.value);
    }

    function onStatusChange(e) {
        setProjectStatus(e.target.value);
    }

    function makeAnotherInput(e) {
        if (newInput.length > 0) {
            e.preventDefault();
            setNewInput([
                ...newInput,
                <Input placeholder="Add URL" onChange={settingURL} />,
            ]);
        }
    }

    function settingURL(e) {
        setUrl([...url, e.target.value]);
    }

    // when add project to the list button clicked, the info from projectName inputs should setProjectName.
    function settingProjectName(e) {
        setProjectName(e.target.value);
    }

    function handleChangeDay(e) {
        setDay(e.target.value);
    }

    function handleChangeWeek(e) {
        setWeek(e.target.value);
    }

    // when button clicked, the info from inputs and select should be added to a database
    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("https://hyosun-project-tracker.herokuapp.com/projects/", {
            method: "POST",
            // credentials: 'include',
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                projectType,
                week,
                day,
                projectName,
                url,
                projectStatus,
            }),
        });
        console.log(
            "i am adding project now" + projectType,
            week,
            day,
            projectName,
            url,
            projectStatus
        );
        setPosted(posted+1)
    }
    //https://hyosun-project-tracker.herokuapp.com/
    //http://localhost:5432/

    return (
        <section className="addProject">
            <h2>Add your project</h2>
            <form onSubmit={handleSubmit}>
                <Select
                    handleChangeWeek={handleChangeWeek}
                    handleChangeDay={handleChangeDay}
                    projectType={projectType}
                    onProjectTypeChange={onProjectTypeChange}
                    onStatusChange={onStatusChange}
                    weeks={weeks}
                    days={days}
                    projectStatus={projectStatus}
                />
                <br />
                <Input
                    placeholder="Project Name"
                    onChange={settingProjectName}
                />
                {newInput.map((input) => input) /* <-- adding more input box */}
                <button className="addURLButton" onClick={makeAnotherInput}>
                    add more URL
                </button>
                <button style={{ color: "black" }} >
                    add project to the list
                </button>
            </form>
        </section>
    );
}

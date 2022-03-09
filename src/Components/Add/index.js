import React, { useState } from "react";
import { Input } from "antd";
import Select from "../Select";
import css from "./Add.module.css";

export default function Add({ posted, setPosted }) {
    const [newInput, setNewInput] = useState([
        <Input id="urlInput" className={css.urlInput} placeholder="Github Repository" onChange={settingURL} />,
    ]);

    const [display, setDisplay] = useState(false)
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

    let lengthOfNewInput = newInput.length+1
    function makeAnotherInput(e) {
        if (lengthOfNewInput-1 > 0) {
            e.preventDefault();
            setNewInput([
                ...newInput,
                <Input className={css.urlInput} placeholder="Add URL" key={lengthOfNewInput} onChange={settingURL} />,
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

    function addNewProject(){
        setDisplay(!display)
    }
    // when button clicked, the info from inputs and select should be added to a database
    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("https://hyosun-project-tracker.herokuapp.com/projects/", {
            method: "POST",
            credentials: "include",
            mode: "no-cors",
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
        setPosted(posted+1)
    }
    //https://hyosun-project-tracker.herokuapp.com/
    //http://localhost:5432/

    return (
        <section className={css.addProject}>
            <button
                className={css.openNewProjectButton}
                onClick={addNewProject}
            >
                Add New Project
            </button>
            <form
                className={display ? css.form : css.nonDisplay}
                onSubmit={handleSubmit} >
                    <Select
                    className={css.select}
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
                    className={css.projectNameInput}
                        placeholder="Project Name"
                        onChange={settingProjectName}
                    />
                    {
                        newInput.map(
                            (input) => input
                        ) /* <-- adding more input box */
                    }
                    <button
                        className={css.addURLButton}
                        onClick={makeAnotherInput}
                    >
                        + Add More URL
                    </button>
                <button className={css.submitButton}>Submit</button>
            </form>
        </section>
    );
}

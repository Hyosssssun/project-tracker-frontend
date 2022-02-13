import { Radio } from "antd";
import React, { useEffect, useState } from 'react'

export default function Select() {
    const [projectType, setProjectType] = useState(Boolean)
    const [disabled, setDisabled] = useState(false)

    const weeks = []
    for (let week = 1; week < 13; week++) {
        weeks.push(week);
    }

    const days = []
    for (let day = 1; day < 6; day++) {
        days.push(day);
    }

    function onProjectTypeChange(e) {
        console.log(`It is ${e.target.value}`);
        setProjectType(e.target.value)
    }

    useEffect(()=>{
        if (projectType === false) {
            setDisabled(true);
        } else if (projectType === true) {
            setDisabled(false);
        }
    }, [projectType])

    return (
        <>
            <Radio.Group className="projectType"
                onChange={onProjectTypeChange}
                defaultValue="Team Project"
            >
                <Radio.Button value={true}>Team Project</Radio.Button>
                <Radio.Button value={false}>
                    Personal Project
                </Radio.Button>
            </Radio.Group>
            <br />
            <Radio.Group className="weeks"
                disabled={disabled}
                defaultValue="1"
            >
                {weeks.map((week) => {
                    return (
                        <Radio.Button value={week}>week {week}</Radio.Button>
                    );
                })}
            </Radio.Group>
            <br />
            <Radio.Group className="days"
                disabled={disabled}
                defaultValue="1"
            >
                {days.map((day) => {
                    return <Radio.Button value={day}>day {day}</Radio.Button>;
                })}
            </Radio.Group>
            
        </>
    );

};
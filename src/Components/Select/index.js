import { Radio } from "antd";
import React, { useState, useEffect } from 'react'

export default function Select({
    handleChangeWeek,
    handleChangeDay,
    onStatusChange,
    projectType,
    onProjectTypeChange,
    weeks,
    days,
    projectStatus,
}) {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (projectType === false) {
            setDisabled(true);
        } else if (projectType === true) {
            setDisabled(false);
        }
    }, [projectType]);

    return (
        <div>
            <Radio.Group
                className="projectType"
                onChange={onProjectTypeChange}
                defaultValue="Team Project"
            >
                <Radio.Button value={true}>Team Project</Radio.Button>
                <Radio.Button value={false}>Personal Project</Radio.Button>
            </Radio.Group>
            <br />
            <Radio.Group className="status" onChange={onStatusChange}>
                {projectStatus}
                <Radio.Button value="Done">Done</Radio.Button>;
                <Radio.Button value="In Progress">In Progress</Radio.Button>;
                <Radio.Button value="Planning">Planning</Radio.Button>;
            </Radio.Group>
            <br />
            <Radio.Group
                className="weeks"
                onChange={handleChangeWeek}
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
            <Radio.Group
                className="days"
                onChange={handleChangeDay}
                disabled={disabled}
                defaultValue="1"
            >
                {days.map((day) => {
                    return <Radio.Button value={day}>day {day}</Radio.Button>;
                })}
            </Radio.Group>
        </div>
    );
};
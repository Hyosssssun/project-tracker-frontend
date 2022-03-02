import { Radio } from 'antd'
import React, { useState, useEffect } from 'react'
import css from "./Select.module.css";

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
            <label className={css.label}> *Project Type : </label>
            <br />
            <Radio.Group  className={css.wrappingSelect} 
                onChange={onProjectTypeChange}
                defaultValue={true}
            >
                <Radio.Button className={css.projectType} id="projectType" value={true}>
                    Team Project
                </Radio.Button>
                <Radio.Button className={css.projectType} value={false}>
                    Personal Project
                </Radio.Button>
            </Radio.Group>
            <br />
            <label className={css.label}>Status : </label>
            <br />
            <Radio.Group  className={css.wrappingSelect} onChange={onStatusChange}>
                {projectStatus}
                <Radio.Button className={css.status} value="Done">
                    Done
                </Radio.Button>
                ;
                <Radio.Button className={css.status} value="In Progress">
                    In Progress
                </Radio.Button>
                ;
                <Radio.Button className={css.status} value="Planning">
                    Planning
                </Radio.Button>
                ;
            </Radio.Group>
            <br />
            <label className={css.label}>Project Week : </label>
            <br />
            <Radio.Group className={css.wrappingSelect} 
                onChange={handleChangeWeek}
                disabled={disabled}
            >
                {weeks.map((week) => {
                    return (
                        <Radio.Button
                            className={css.weeks}
                            key={week}
                            value={week}
                        >
                            week {week}
                        </Radio.Button>
                    );
                })}
            </Radio.Group>
            <br />
            <label className={css.label}>Project day : </label>
            <br />
            <Radio.Group className={css.wrappingSelect} 
                onChange={handleChangeDay}
                disabled={disabled}
                defaultValue="1"
            >
                {days.map((day) => {
                    return (
                        <Radio.Button
                            className={css.days}
                            key={day}
                            value={day}
                        >
                            day {day}
                        </Radio.Button>
                    );
                })}
            </Radio.Group>
        </div>
    );
};
import React from "react";

export default function Item(props) {
    const { projectid, team, week, day, projectname, url } = props.project;
    const arr = url.replace(/['"{}}]+/g, "").split(",")
    const teamOrPersonal = (bool)=>{
        if(bool === true){
            return "Team Project"
        } else if (bool === false){
            return "Personal Project"
        }
    }

    return (
        <>
            <span>{projectid}</span>
            <br />
            <span>{teamOrPersonal(team)}</span>
            <br />
            {team === true ? (
                <span>
                    Week {week} Day {day}<br />
                </span>
            ) : null}
            
            <span>{projectname}</span>
            <br />
            {arr.map((e) => {
                return (
                    <>
                        <a href={e}>{e}</a>
                        <br />
                    </>
                );
            })}

            <br />
        </>
    );
}

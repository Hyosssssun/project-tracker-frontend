import React from "react";

export default function Item(props) {
    const { projectid, team, week, day, projectname, url } = props.project;
    const arr = url.replace(/['"{}}]+/g, "").split(",")
    console.log(arr)
    const teamOrPersonal = (bool)=>{
        if(bool === true){
            return "Team Project"
        } else if (bool === false){
            return "Personal Project"
        }
    }
    let useThis;

    if (week === /^\d+$/ && day === /^\d+$/) {
        useThis = `W${week}D${day}`;
    } else {
        useThis = null;
    }

    return (
        <div>

            <span>{projectid}</span><br />
            <span>{teamOrPersonal(team)}</span><br />
            <span>{useThis}</span><br />
            <span>{projectname}</span><br />
            {arr.map((e)=>{
                return (
                    <>
                        <a href={e}>{e}</a>
                        <br />
                    </>
                );
            })}
            
            <br/>
        </div>
    );
}

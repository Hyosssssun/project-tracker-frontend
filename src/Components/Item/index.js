import React from "react";

export default function Item(props) {
    const { projectid, team, week, day, projectname, url } = props.project;
    const urlArr = url.replace(/['"{}}]+/g, "").split(",")
    const teamOrPersonal = (bool)=>{
        if(bool === true){
            return "Team Project"
        } else if (bool === false){
            return "Personal Project"
        }
    }
    async function deleteProject(e) {
       const response = await fetch(
            `https://hyosun-project-tracker.herokuapp.com/projects/${e.target.value}`,{ method:"DELETE"}
        );
        const data = await response.json()
        console.log(data);
    }

    return (
        <form >
            <span>{projectid}</span>
            <br />
            <span>{teamOrPersonal(team)}</span>
            <br />
            {team === true ? (
                <span>
                    Week {week} Day {day}
                    <br />
                </span>
            ) : null}

            <span>{projectname}</span>
            <br />
            {urlArr.map((e) => {
                return (
                    <>
                        <a href={e}>{e}</a>
                        <br />
                    </>
                );
            })}
            <button value={projectid} onClick={deleteProject}>delete</button>
        </form>
    );
}

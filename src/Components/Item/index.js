import React from "react";

export default function Item(props) {
    const { projectid, team, week, day, projectname, url } = props.children
    const urlArr = url.split(", ")
    const teamOrPersonal = (bool)=>{
        if(bool === true){
            return "Team Project"
        } else if (bool === false){
            return "Personal Project"
        }
    }
    console.log(url)
    console.log(urlArr)
    return (
        <div>

            <span>{projectid}</span><br></br>
            <span>{teamOrPersonal(team)}</span><br />
            <span>W{week}D{day}</span><br />
            <span>{projectname}</span><br />
            {urlArr.map((e)=>{
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

import React from "react";

export default function Item(props) {
    const { projectid, team, week, day, projectname, url } = props.children
    const urlArr = url.split(", ")
    // const teamOrPersonal = (bool)=>{
    //     if(bool === true){
    //         return "team project"
    //     } else if (bool === false){
    //         return "personal project"
    //     }
    // }
    console.log(team, url)
    return (
        <div>

            <span>{projectid}</span><br></br>
            {/* <span>{teamOrPersonal(team)}</span> */}
            <span>W{week}D{day}</span><br></br>
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

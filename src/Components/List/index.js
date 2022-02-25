import React, { useState, useEffect } from "react"
import Item from "../Item";

export default function List({ posted }) {
    const [projectList, setProjectList] = useState([])
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch(
                "https://hyosun-project-tracker.herokuapp.com/projects/"
                // {
                //     mode: "no-cors",
                // }
            );
            const data = await response.json();
            setProjectList(data.payload)
        }
        getData()
        
    }, [posted])
    
    async function deleteProject(){
        // const response = await fetch(
        //         "https://hyosun-project-tracker.herokuapp.com/projects/{"
        console.log("i am deleete project function")
    }

    return (
        <section className="list">
            <h2>Project list</h2>
            {projectList.map((project) => {
                return (
                    <div>
                        <Item project={project} key={project.projectid}>{project}</Item>
                        <button onClick={deleteProject}>delete</button>
                    </div>
                );
            })}
        </section>
    );
    // return null;
};

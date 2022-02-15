import React, { useState, useEffect } from "react"
import Item from "../Item";

export default function List() {
    const [projectList, setProjectList] = useState([])
    useEffect(()=>{
        async function getData(){
            const reponse = await fetch(
                "https://hyosun-project-tracker.herokuapp.com/projects"
            );
            const data = await reponse.json();
            console.log(data.payload)
            setProjectList(data.payload)
        }
        getData()
    }, [])
    
    return (
        <section className="list">
            <h2>Project list</h2>
            {projectList.map((project) => {
                return <Item project={project}>{project}</Item>;
            })}
        </section>
    );
};

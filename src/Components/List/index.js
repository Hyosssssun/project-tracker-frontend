import React, { useState, useEffect } from "react"
import Item from "../Item";

export default function List() {
    const [projectList, setProjectList] = useState([])
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch(
                "http://localhost:5432/projects/"
                // {
                //     mode: "no-cors",
                // }
            );
            const data = await response.json();
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
    // return null;
};

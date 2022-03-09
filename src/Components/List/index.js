import React, { useState, useEffect } from "react"
import css from "./List.module.css";
import Item from "../Item";

export default function List({ posted }) {
    const [projectList, setProjectList] = useState([])
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch(
                "https://hyosun-project-tracker.herokuapp.com/projects/"
                // ,{
                //     method: "GET",
                //     credentials: "include",
                //     mode: "no-cors",
                //     headers: {
                //         "Content-Type": "application/json",
                //     }
                // }
            );
            const data = await response.json();
            setProjectList(data.payload)
        }
        getData()
    }, [posted])
        return (
        <section >
            {projectList.map((project) => {
                return (
                    <div className={css.list} key={project.projectid}>
                        <span className={css.id}>{project.projectid}</span>
                        <Item
                            projectid={project.projectid}
                            team={project.team}
                            week={project.week}
                            day={project.day}
                            projectname={project.projectname}
                            url={project.url}
                            projectStatus={project.projectstatus}
                        >
                            {project}
                        </Item>
                    </div>
                );
            })}
        </section>
    );
    // return null;
};

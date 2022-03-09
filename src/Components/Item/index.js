import React from "react";
import css from "./Item.module.css";

export default function Item({ projectid, team, week, day, projectname, url, projectstatus }) {
    // console.log(projectstatus);
    const urlArr = url.replace(/['"{}}]+/g, "").split(",");
    const teamOrPersonal = (bool) => {
        if (bool === true) {
            return "Team Project";
        } else if (bool === false) {
            return "Personal Project";
        }
    };
    async function deleteProject(e) {
        const response = await fetch(
            `https://hyosun-project-tracker.herokuapp.com/projects/${e.target.value}`,
            { method: "DELETE" }
        );
        const data = await response.json();
        console.log(data);
    }

    return (
        <form className={css.form}>
            <div>
                <div>{teamOrPersonal(team)}</div>
                {team === true ? (
                    <div>
                        Week {week} Day {day}
                    </div>
                ) : null}
                <div>{projectname}</div>
                {urlArr.map((e) => {
                    return (
                        <div key={e.indexOf()}>
                            <a className={css.link} href={e}>
                                {e}
                            </a>
                        </div>
                    );
                })}
                <div>{projectstatus}</div>
            </div>
            <button
                className={css.deleteButton}
                value={projectid}
                onClick={deleteProject}
            >
                delete
            </button>
        </form>
    );
}

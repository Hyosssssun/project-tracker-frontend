import React, { useState } from "react";
import { Input } from "antd";
import Select from "../Select";

// Plan
// 1. I want to add delete button for URL input > onClick={someFn}
// 2. 



// add new projcet to the List
export default function Add() {
    // in case there are more URL
    const [newInput, setNewInput] = useState([<Input placeholder="Github Repository" />])
    
    function makeAnotherInput(e){
        if(newInput.length > 0){
            e.preventDefault();
            setNewInput([
                ...newInput,
                <Input placeholder="Add URL" />,
            ]);
        } else {
            window.alert("No URL at all?")
        }
    }

    // when button clicked, the info from inputs and select should be added to a database
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch(
    //         "https://sunny-project-tracker.herokuapp.com/projects", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 week: 4, day:2, projectname:"iljel", team:true
    //             }),
    //         }
    //     ).then(()=>{
    //         console.log('new info added')
    //     })
    // }

    return (
        <section className="addProject">
            <h2>Add your project</h2>
            <form>
                <Select />
                <br />
                <Input placeholder="Project Name" />
                {newInput.map((input) => input) /* <-- adding more input box */}
                <button
                    className="addURLButton"
                    onClick={makeAnotherInput}
                >add more URL</button>
                {/* <button style={{ color: "black" }} onClick={handleSubmit}>
                    add project to the list
                </button> */}
            </form>
        </section>
    );
}

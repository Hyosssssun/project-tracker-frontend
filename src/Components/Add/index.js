import React from "react";
import { Input } from "antd";
import Select from "../Select";

export default function Add() {

    return (
        <section>
            <h2>Hi i am Input</h2>

            <form>
                dropdown(team/personal)
                <br />
                <Select></Select>
                <br />
                <Input placeholder="Project Name" />
                <Input placeholder="githubRepo" />
                <button>add</button>
            </form>
        </section>
    );
}

import React from 'react';
import SubHeader from "@/modules/layout/components/sub-header";
import WorksTemplate from "@/modules/works/template";
import {getListProjects} from "@/lib/data";

const Works = async () => {
    const projects = await getListProjects();
    return (
        <>
            <SubHeader title={"Projects"} subtitle={"projects"}/>
            <WorksTemplate projects={projects}/>
        </>
    );
};

export default Works;
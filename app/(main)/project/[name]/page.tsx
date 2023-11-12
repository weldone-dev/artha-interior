import React from 'react';
import {notFound} from "next/navigation";
import ProjectTemplate from "@/modules/project/template";
import {getListProjects, getProject} from "@/lib/data";

interface IProps {
    params: {
        name: string;
    }
}

const ProjectPage = async ({params}: IProps) => {
    const {name} = params;
    if (!name) {
        notFound();
    }
    const currentProject = await getProject(name);
    if (!currentProject) {
        notFound();
    }
    const moreProjects = await getListProjects()
    return <ProjectTemplate currentProject={currentProject} moreProjects={moreProjects}/>;
};

export default ProjectPage;
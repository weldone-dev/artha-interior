import {Fragment} from "react";
import type {FC} from 'react';
import {CiUser} from "react-icons/ci";
import {BsCalendar} from "react-icons/bs";
import SubHeader from "@/modules/layout/components/sub-header";
import CardProject from "@/modules/layout/components/card-project";
import Topic from "@/modules/layout/templates/topic";
import Detail from "@/modules/project/components/detail";
import {getDay, getNameMount, getYear} from "@/lib/utils/get-date";
import Slider from "@/modules/project/components/silder";
import type {IProjectWorkItem} from "@/types/global";

interface IProps {
    currentProject: IProjectWorkItem
    moreProjects: IProjectWorkItem[];
}

const ProjectTemplate: FC<IProps> = ({currentProject, moreProjects}) => {
    return (
        <>
            <SubHeader title={"Projects Detail"} subtitle={"projects petail"}/>
            <section className={"container pt-6 sm:py-[80px]"}>
                <div className={"relative overflow-hidden"}>
                    <Slider/>
                    <Detail date={currentProject.date}/>
                </div>

            </section>
            <section className={"container"}>
                <Topic className={"pt-0 mb-4"}>{currentProject.title}</Topic>
                <div className={"flex flex-wrap gap-x-5 text-sm"}>
                    <span className={"flex items-center gap-x-1.5"}><CiUser/> {currentProject.author}</span>
                    <span
                        className={"flex items-center gap-x-1.5"}><BsCalendar/> {getNameMount(currentProject.date)} {getDay(currentProject.date)},{getYear(currentProject.date)}</span>
                </div>
                <div className={"mt-2"}>
                    {currentProject.description.split("\n").map((line, index) => (
                        <Fragment key={index}><p>{line}</p><br/></Fragment>
                    ))}
                </div>
            </section>
            <section className={"container"}>
                <Topic>More Projects</Topic>
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pb-[80px]"}>
                    {moreProjects.map((item, index) => (
                        <CardProject
                            key={index}
                            project={item}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProjectTemplate;
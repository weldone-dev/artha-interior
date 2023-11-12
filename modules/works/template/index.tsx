import type {FC} from 'react';
import Topic from "@/modules/layout/templates/topic";
import CardProject from "@/modules/layout/components/card-project";
import OurVision from "@/modules/layout/components/our-vision";
import {IProjectWorkItem} from "@/types/global";
import MoreProjectButton from "@/modules/works/components/MoreProjectButton";

interface IProps {
    projects: IProjectWorkItem[];
}

const WorksTemplate: FC<IProps> = ({projects}) => {
    return (
        <>
            <section className={"relative container"}>
                <Topic>Our works</Topic>
                <div className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"}>
                    {projects.map((item, index) => (
                        <CardProject
                            key={index}
                            className={"min-w-[280px] max-w-full  mb-12"}
                            project={item}
                        />
                    ))}
                </div>
                <MoreProjectButton/>
            </section>
            <OurVision/>
        </>
    );
};

export default WorksTemplate;
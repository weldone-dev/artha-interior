import type {ComponentProps, FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import {IProjectWorkItem} from "@/types/global";

interface IProps extends ComponentProps<"div"> {
    project: IProjectWorkItem;
}

const CardProject: FC<IProps> = ({project, className}) => {
    const {
        image,
        title,
        subtitle,
        description,
        link
    } = project;
    return (
        <div className={classNames("relative flex flex-col w-full group", className)}>
            <div className={"h-[195px] overflow-hidden"}>
                <Image
                    className={"[filter:brightness(0.5)] block object-cover w-full  duration-300 h-full group-hover:scale-110"}
                    src={image}
                    alt={""}
                    width={512}
                    height={512}
                />
            </div>
            <div className={"relative z-10 bottom-0 pt-5"}>
                <h3 className={"text-xl font-extrabold w-[212px]"}>{title}</h3>
                <div className={"flex justify-around mt-2"}>
                    <p className={"text-xs w-full"}>{subtitle}</p>
                    <Link href={"/project/" + link}
                          className={"whitespace-nowrap text-base font-medium  hover:text-[#c8b16f] duration-300 after:duration-300 after:content-[''] after:w-[20px] after:h-[1px] after:ml-[10px] after:inline-block after:bg-white after:mb-[4px] hover:after:w-[25px] hover:after:bg-[#c8b16f]"}>
                        see projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
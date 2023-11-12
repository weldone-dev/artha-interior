import React from 'react';
import Image from "next/image"
import Link from "next/link";
import {CiUser} from "react-icons/ci";
import {BsCalendar} from "react-icons/bs";
import {BiMessageDetail} from "react-icons/bi";
import Aside from "@/modules/blog/components/article";
import type {IPost} from "@/types/global";
import {getDay, getNameMount} from "@/lib/utils/get-date";

interface IProps {
    items: IPost[];
}
const BlogListTemplate:React.FC<IProps> = ({items}) => {
    return (
        <div className={"container flex flex-wrap md:flex-nowrap justify-between gap-x-2"}>
            <div className={"mt-8"}>
                {items.map((item, index) =>(
                    <section key={index} className={"my-8 p-1"}>
                        <div>
                            <Image src={item.image} alt={item.title} width={1024} height={1024}/>
                        </div>
                        <div className={"py-7 pr-4 pl-0"}>
                            <Link href={"/blog/"+item.link} className={"duration-300 hover:text-[#c8b16f]"}>
                                <h2 className={"text-2xl sm:text-3xl font-semibold"}>{item.title}</h2>
                            </Link>
                            <div className={"flex flex-wrap gap-x-5 text-sm mt-4"}>
                                <span className={"flex items-center gap-x-1.5"}><CiUser/> {item.author}</span>
                                <span className={"flex items-center gap-x-1.5"}><BsCalendar/> {getNameMount(item.date)} {getDay(item.date)}</span>
                                {item.comments.length > 0 && (
                                    <span className={"flex items-center gap-x-1.5"}><BiMessageDetail/> {item.comments.length} Comments</span>
                                )}
                            </div>
                            <p className={"mt-5 my-4 text-sm text-ellipsis overflow-hidden h-[60px]"}>{item.description}</p>
                            <Link className={"inline-block px-8 py-1.5 border-[1px] border-white/10 duration-300 hover:border-[#c8b16f]"} href={"/blog/"+item.link}>More detail</Link>
                        </div>
                    </section>
                ))}
            </div>
            <Aside className={"max-w-[400px] px-4"}/>
        </div>
    );
};

export default BlogListTemplate;

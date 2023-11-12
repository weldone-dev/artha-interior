import React from 'react';
import Image from "next/image";
import {CiUser} from "react-icons/ci";
import {BsCalendar} from "react-icons/bs";
import {BiMessageDetail} from "react-icons/bi";
import type {IPost} from "@/types/global";
import Aside from "@/modules/blog/components/article";
import Comment from "@/modules/blog/components/comment";
import {getDay, getNameMount} from "@/lib/utils/get-date";

interface IProps  {
    post: IPost;
}
const BlogSingleTemplate:React.FC<IProps> = ({post}) => {
    return (
        <div className={"container flex flex-wrap md:flex-nowrap justify-between gap-x-4"}>
            <div className={"my-16"}>
                <Image src={post.image} alt={post.title}  className={"w-full object-cover aspect-video"} width={"1600"} height={"900"}/>
                <div className={"py-7 pr-4 pl-0"}>
                    <h2 className={"text-3xl font-semibold"}>{post.title}</h2>
                    <div className={"flex flex-wrap gap-x-5 text-sm mt-4"}>
                        <span className={"flex items-center gap-x-1.5"}><CiUser/> {post.author}</span>
                        <span className={"flex items-center gap-x-1.5"}><BsCalendar/> {getNameMount(post.date)} {getDay(post.date)}</span>
                        {post.comments.length > 0 && (
                            <span className={"flex items-center gap-x-1.5"}><BiMessageDetail/> {post.comments.length} Comments</span>
                        )}
                    </div>
                    <p className={"mt-5 my-4 text-sm"}>{post.description}</p>
                </div>
                <div>
                    <div className={"mb-8"}>Comments ({post.comments.length})</div>
                    <ul className={"flex flex-col gap-4"}>
                        {post.comments.map((item, index) =>(
                            <li key={index}>
                                <Comment comment={item}  />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Aside className={"max-w-[400px] px-4"}/>
        </div>
    );
};

export default BlogSingleTemplate;
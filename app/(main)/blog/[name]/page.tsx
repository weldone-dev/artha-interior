import React from 'react';
import {notFound} from "next/navigation";
import SubHeader from "@/modules/layout/components/sub-header";
import BlogSingleTemplate from "@/modules/blog/template/single-post";
import {getBlog} from "@/lib/data";

interface IProps {
    params: { name: string }
}

const BlogSinglePage = async ({params: {name}}: IProps) => {
    const post = await getBlog(name);
    if (!post) {
        notFound();
    }
    return (
        <>
            <SubHeader title={"Blog Single"} subtitle={"blog single"}/>
            <BlogSingleTemplate post={post}/>
        </>
    );
};

export default BlogSinglePage;
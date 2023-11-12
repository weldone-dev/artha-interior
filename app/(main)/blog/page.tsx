import React from 'react';
import SubHeader from "@/modules/layout/components/sub-header";
import {getBlogList} from "@/lib/data";
import BlogListTemplate from "@/modules/blog/template/posts";

const Blog = async () => {
    const postList = await getBlogList();
    return (
        <>
            <SubHeader title={"Blog"} subtitle={"blog"}/>
            <BlogListTemplate items={postList}/>
        </>

    );
};

export default Blog;
import React, {ComponentProps} from 'react';
import classNames from "classnames";
import Image from "next/image";
import Topic from "@/modules/layout/templates/topic";
import {getBlogAbout, getBlogList, getBlogTags} from "@/lib/data";
import {getDay, getNameMount, getYear} from "@/lib/utils/get-date";

const Aside: React.FC<ComponentProps<"aside">> = async ({className, ...props}) => {
    const posts = await getBlogList();
    const tags = await getBlogTags();
    const about = await getBlogAbout();
    return (
        <aside className={classNames("mb-4", className)} {...props}>
            <Topic className={"after:mt-[20px] after:h-[1px] !font-bold capitalize"}>Recent Post</Topic>
            <div className={"flex flex-col gap-y-6"}>
                {posts.map((item, index) => (
                    <div className={"flex gap-x-5"} key={index}>
                        <div className={"w-[64px] h-[64px]"}>
                            <Image src={item.image} alt={""} className={"w-full h-full object-cover"} width={512}
                                   height={512}/>
                        </div>
                        <div>
                            <h6>{item.title}</h6>
                            <p className={"text-[#aaa]"}>{getNameMount(item.date)} {getDay(item.date)}, {getYear(item.date)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Topic className={"after:mt-[20px] after:h-[1px] !font-bold capitalize"}>Tags</Topic>
            <div className={"flex flex-wrap gap-x-2 gap-y-4"}>
                {tags.map((item, index) => (
                    <div key={index}
                         className={"border-[1px] border-white/10 px-[10px] py-[5px] text-sm cursor-pointer duration-300 hover:border-[#c8b16f]"}>{item}</div>
                ))}
            </div>

            <Topic className={"after:mt-[20px] after:h-[1px] !font-bold capitalize"}>About Us</Topic>
            <p>{about}</p>

        </aside>
    );
};

export default Aside;
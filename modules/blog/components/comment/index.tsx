import React from 'react';
import Image from "next/image";
import imgAvatar from "@/public/images/avatar.jpg"
import {IPostComment} from "@/types/global";
import {getDay, getHourMinute, getNameMount, getYear} from "@/lib/utils/get-date";

interface IProps {
    comment: IPostComment;
}

const Comment: React.FC<IProps> = ({comment}) => {
    const {name, message, date} = comment;
    return (
        <div className={"flex gap-4"}>
            <Image src={imgAvatar} width={70} height={70} alt={"avatar"}
                   className={"hidden sm:block w-[70px] h-[70px] rounded-full"}/>
            <div className={"bg-[#191919] py-5 px-7"}>
                <div className={"flex flex-wrap gap-2 justify-between"}>
                    <span className={"font-extrabold"}>{name}</span>
                    <span
                        className={"text-xs uppercase "}>{getNameMount(date)} {getYear(date)} {getDay(date)}, {getHourMinute(date).join(":")}</span>
                </div>
                <p className={"py-4 text-sm text-[#eaeaea]"}>{message}</p>
            </div>
        </div>
    );
};

export default Comment;
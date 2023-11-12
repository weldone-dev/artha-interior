import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

interface IProps {
    image: string;
}

const ImageItem: FC<IProps> = ({image}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);
    return (
        <div className={"relative"}>
            {loading && <div className={"absolute w-full h-full bg-black/80 flex justify-center items-center"}>
                <AiOutlineLoading3Quarters className={"animate-spin text-3xl"}/>
            </div>}
            <Image
                src={image}
                alt={"gallery"}
                className={"duration-500  object-cover w-full h-full group-hover:[filter:brightness(0.3)] group-hover:scale-110"}
                width={1024}
                height={1024}
            />
        </div>
    );
};

export default ImageItem;
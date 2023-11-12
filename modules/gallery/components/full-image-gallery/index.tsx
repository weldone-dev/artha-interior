"use client"
import {useState} from "react";
import type {FC} from 'react';
import ReactImageGallery from "react-image-gallery"
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose} from "react-icons/ai";
import type {IGallery} from "@/types/global";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css"

interface IProps {
    gallery: IGallery[];
    startIndex: number;
    items: {
        original: string;
    }[]
    closeGallery: () => void;
}

const FullImageGallery: FC<IProps> = (props) => {
    const {
        closeGallery,
        startIndex,
        items,
        gallery
    } = props;

    const [index, setIndex] = useState(startIndex);
    return (
        <div className={"relative bg-black w-full h-full -z-10"}>
            <div className={"w-screen absolute h-[47px] bg-black/50 z-50 flex items-center justify-between px-5 text-white/80"}>
                <div>
                    <span>{index + 1}</span> / <span>{gallery.length}</span>
                </div>
                <div className={"text-2xl cursor-pointer"}
                     onClick={closeGallery}>
                    <AiOutlineClose/>
                </div>
            </div>


            <div className={"relative top-1/2 -translate-y-1/2 left-0 z-40"}>
                <ReactImageGallery
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={startIndex}
                    items={items}
                    onSlide={(currentIndex) => setIndex(currentIndex)}
                    renderLeftNav={(onClick, disabled) => (
                        <button onClick={onClick} disabled={disabled}
                                className={"absolute left-5 p-2 rounded-lg top-1/2 -translate-y-1/2 text-3xl bg-black/50 z-50"}>
                            <AiOutlineArrowLeft/>
                        </button>
                    )}
                    renderRightNav={(onClick, disabled) => (
                        <button onClick={onClick} disabled={disabled}
                                className={"absolute right-5 p-2 rounded-lg top-1/2 -translate-y-1/2 text-3xl bg-black/50 z-50"}>
                            <AiOutlineArrowRight/>
                        </button>
                    )}
                />
            </div>
        </div>
    );
};

export default FullImageGallery;
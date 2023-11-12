"use client"
import {useState} from 'react';
import type {FC} from 'react'
import classNames from "classnames";
import {AiOutlineArrowRight} from "react-icons/ai";
import {IFilterButton, IGallery, IGalleryFilter} from "@/types/global";
import FullImageGallery from "@/modules/gallery/components/full-image-gallery";
import ButtonFilter from "@/modules/gallery/components/filter-button";
import ImageItem from "@/modules/gallery/components/image-item";

interface IProps {
    gallery: IGallery[];
}

const filterButtons: IFilterButton[] = [
    {text: "All Design", type: undefined},
    {text: "Exterior Design", type: "exterior"},
    {text: "Flat Design", type: "flat"},
    {text: "Interior Design", type: "interior"},
    {text: "Modern Design", type: "modern"}
]

const GalleryTemplate: FC<IProps> = ({gallery}) => {
    const [filter, setFilter] = useState<IGalleryFilter>();
    const [viewGallery, setViewGallery] = useState(false);
    const [startIndex, setStartIndex] = useState<number>(0);
    const galleryFiler = gallery.filter(value => filter === undefined || value.type.includes(filter));

    function openGallery(index: number) {
        document.body.classList.add("overflow-y-hidden");
        setViewGallery(true);
        setStartIndex(index);
    }

    function closeGallery() {
        document.body.classList.remove("overflow-y-hidden");
        setViewGallery(false);
    }

    return (
        <section className={"container py-[80px]"}>
            <div className={"flex justify-between gap-2 flex-wrap"}>
                <div
                    className={"flex items-center bg-[#c8b16f] text-[#292929] px-[25px] py-[6px] font-medium"}>
                    Filter Gallery <AiOutlineArrowRight/>
                </div>
                <div className={"flex flex-wrap gap-x-8 gap-y-2 border-b-[1px] border-white/10"}>
                    {filterButtons.map((value, index) => (
                        <ButtonFilter
                            key={index}
                            onClick={() => setFilter(value.type)}
                            isActive={filter === value.type}>
                            {value.text}
                        </ButtonFilter>
                    ))}
                </div>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-16 duration-300"}>
                {galleryFiler.map((gallery, index) => (
                    <div
                        key={gallery.image}
                        onClick={() => openGallery(index)}
                        className={"relative group min-h-[180px] h-[180px] overflow-hidden cursor-pointer after:content-[''] after:absolute after:w-[8%] after:bg-[#c8b16f] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-5 hover:after:scale-x-100 after:duration-300 after:origin-left"}
                    >
                        <ImageItem image={gallery.image}/>
                        <div
                            className={"absolute bottom-10 duration-300 -translate-x-full group-hover:left-5 group-hover:translate-x-0 "}>
                            <h3 className={"uppercase text-[#c8b16f] font-semibold"}>INTERIOR HOUSE</h3>
                            <div className={"uppercase text-xs flex items-center gap-2 "}>
                                MORE DETAIL <AiOutlineArrowRight/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={classNames("fixed top-0 left-0 h-screen w-screen duration-500 opacity-0", viewGallery ? "visible opacity-100" : "invisible ")}>
                {viewGallery &&
                    (<FullImageGallery
                        closeGallery={closeGallery}
                        startIndex={startIndex}
                        gallery={galleryFiler}
                        items={galleryFiler.map((v) => ({"original": v.image}))}
                    />)
                }
            </div>
        </section>
    );
};

export default GalleryTemplate;
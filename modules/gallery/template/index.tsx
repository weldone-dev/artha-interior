"use client"
import {useEffect, useState} from 'react';
import type {FC} from 'react'
import classNames from "classnames";
import {CSSTransition} from 'react-transition-group';

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
const styles = {
    enter: "scale-0 opacity-0",
    enterActive: "transition-scale",
    enterDone: "scale-100 opacity-100 w-full h-full",
    exitDone: "hidden w-0 h-0"
}
const GalleryTemplate: FC<IProps> = ({gallery}) => {
    const [filter, setFilter] = useState<IGalleryFilter>();
    const [showModalGallery, setShowModalGallery] = useState(false);
    const [startIndex, setStartIndex] = useState<number>(0);
    const galleryFiler = gallery.filter(value => filter === undefined || value.type.includes(filter));
    const [viewsGallery, setViewsGallery] = useState<boolean[]>(new Array(gallery.length).fill(true))

    function openGallery(index: number) {
        document.body.classList.add("overflow-y-hidden");
        setShowModalGallery(true);
        setStartIndex(index);
    }

    useEffect(() => {
        setViewsGallery(gallery.map((item) => filter === undefined || item.type.includes(filter)))
    }, [filter])

    function closeGallery() {
        document.body.classList.remove("overflow-y-hidden");
        setShowModalGallery(false);
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
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-16 duration-300"}>
                {gallery.map((item, index) => (
                    <CSSTransition
                        key={item.image}
                        in={viewsGallery[index]}
                        timeout={300}
                        classNames={styles}
                        unmountOnExit={true}
                        mountOnEnter={true}
                    >
                        <div onClick={() => openGallery(index)}
                             className={classNames("overflow-hidden scale-0  opacity-0 duration-500", viewsGallery[index] && "scale-100 opacity-100")}>
                            <div
                                className={classNames("relative group min-h-[180px] h-[180px]  overflow-hidden cursor-pointer  duration-500  after:content-[''] after:absolute after:w-[8%] after:bg-[#c8b16f] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-5 hover:after:scale-x-100 after:duration-300 after:origin-left", "h-full")}>
                                <ImageItem image={item.image}/>
                                <div className={"hidden  scale-0 hover:scale-100"}></div>
                                <div
                                    className={"absolute bottom-10 duration-300 -translate-x-full group-hover:left-5 group-hover:translate-x-0 "}>
                                    <h3 className={"uppercase text-[#c8b16f] font-semibold"}>INTERIOR HOUSE</h3>
                                    <div className={"uppercase text-xs flex items-center gap-2 "}>
                                        MORE DETAIL <AiOutlineArrowRight/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </div>
            <div
                className={classNames("fixed top-0 left-0 h-screen w-screen duration-500 opacity-0", showModalGallery ? "visible opacity-100" : "invisible ")}>
                {showModalGallery &&
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
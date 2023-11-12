import React from 'react';
import SubHeader from "@/modules/layout/components/sub-header";
import GalleryTemplate from "@/modules/gallery/template";
import {getGalleryList} from "@/lib/data";

const Gallery = async () => {
    const gallery = await getGalleryList();
    return (
        <>
            <SubHeader title={"Gallery"} subtitle={"gallery"}/>
            <GalleryTemplate gallery={gallery}/>
        </>
    );
};

export default Gallery;
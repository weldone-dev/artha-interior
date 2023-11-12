export type IPostComment = {
    "name": string;
    "message": string;
    "date": number;
}
export type IPost = {
    "image": string;
    "title": string;
    "description": string;
    "author": string;
    "date": number;
    "link": string;
    "comments": IPostComment[];
}
export type IProjectWorkItem = {
    "image": string;
    "title": string;
    "subtitle": string;
    "description": string;
    "link": string;
    "author": string;
    "date": number;
}

export type IGalleryFilter = undefined | "exterior" | "flat" | "interior" | "modern";
export type IGallery = {
    image: string;
    type: IGalleryFilter[];
}
export type IFilterButton = {
    text: string;
    type: IGalleryFilter;
}

export type IContact = {
    map: string;
    address: string;
    number: string;
    mail: string;
    site: string;
}

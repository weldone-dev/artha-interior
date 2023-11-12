import db from './db.json'
import type {IContact, IGallery, IPost, IProjectWorkItem} from "@/types/global";

export async function getListProjects() {
    return db.projects as IProjectWorkItem[];
}

export async function getProject(name: string) {
    const items = db.projects as IProjectWorkItem[];
    const project = items.filter(item => item.link === name);
    if (project.length) {
        return project[0]
    }
    return
}

export async function getGalleryList() {
    return db.gallery as IGallery[];
}

export async function getContact() {
    return db.contact as IContact;
}

export async function getBlogList() {
    return db.blog.items as IPost[];
}

export async function getBlogAbout() {
    return db.blog.about as string;
}

export async function getBlogTags() {
    return db.blog.tags as string[];
}

export async function getBlog(name: string) {
    const items = db.blog.items as IPost[];
    const post = items.filter(item => item.link === name);
    if (post.length) {
        return post[0];
    }
    return
}
import SlideShow from "@/modules/home/components/slide-show";
import CompanyStory from "@/modules/home/components/company-story";
import OutProjects from "@/modules/home/components/out-projects";
import OurVision from "@/modules/layout/components/our-vision";
import {getListProjects} from "@/lib/data";
import 'aos/dist/aos.css';

export default async function HomePage() {
    const moreProjects = await getListProjects();
    return (
        <>
            <SlideShow/>
            <CompanyStory/>
            <OutProjects projects={moreProjects}/>
            <OurVision className={"mt-[80px]"}/>
        </>
    )
}

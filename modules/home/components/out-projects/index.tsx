'use client'
import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import Aos from "aos";
import CardProject from "@/modules/layout/components/card-project";
import Topic from "@/modules/layout/templates/topic";
import {IProjectWorkItem} from "@/types/global";

interface IProps {
    projects: IProjectWorkItem[];
}

const OutProjects: React.FC<IProps> = ({projects}) => {
    useEffect(function () {
        Aos.init({duration: 600});
    }, []);
    return (
        <section className={"overflow-hidden"}>
            <div className={"mx-[50px]"}>
                <Topic>Our Projects</Topic>
                <Swiper
                    data-aos="fade-up"
                    slidesPerView={1}
                    breakpoints={{
                        560: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={30}
                    rewind={true}
                    height={500}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    effect={'fade'}
                    modules={[Autoplay, Navigation]}
                >
                    {projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardProject project={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OutProjects;
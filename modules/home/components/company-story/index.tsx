'use client'
import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import bg1 from "@/public/images/company-story-1.jpg";
import bg2 from "@/public/images/company-story-2.jpg";
import bg3 from "@/public/images/company-story-3.jpg";
import {Swiper as SwiperType} from "swiper";
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import classNames from "classnames";
import Aos from "aos";
import Topic from "@/modules/layout/templates/topic";

const slides = [
    {
        title: 'House design',
        description: "Proin pretium consequat est, sit amet consectetur luctus vel Etiam quis...",
        link: '#',
        image: bg1
    },
    {
        title: 'Minimalist design',
        description: "Proin pretium consequat est, sit amet consectetur luctus vel Etiam quis...",
        link: '#',
        image: bg2
    },
    {
        title: 'Modern design',
        description: "Proin pretium consequat est, sit amet consectetur luctus vel Etiam quis...",
        link: '#',
        image: bg3
    },
]
const CompanyStory = () => {
    const swiperRef = React.useRef<SwiperType>();
    const [sliderMaxCount, setSliderMaxCount] = React.useState<number>(0);
    const [currentNumberSlider, setCurrentNumberSlider] = React.useState<number>(1);

    useEffect(function () {
        Aos.init({duration: 600});
    }, []);

    return (
        <section className={"relative flex  sm:mx-[50px] flex-wrap overflow-hidden"}>
            <div data-aos="fade-right" className={" w-full h-full p-[10px] sm:p-[60px] sm:!pl-0"}>
                <Topic>Our company story</Topic>
                <p className={"text-xs"}>Donec at cursus sem. Duis condimentum posuere purus, at venenatis tellus
                    mollis.
                    Vestibulum cursus convallis venenatis. Sed ut blandit mauris. Lorem non suscipit. Proin pretium
                    consequat est, sit amet consectetur luctus vel. Etiam quis interdum felis, at pellentesque metus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.</p>
                <div className={"mt-3 flex items-center gap-x-6 text-[#dedede]"}>
                    <div
                        className={"text-6xl sm:text-9xl after:content-[''] after:block after:w-full after:h-[8px] after:bg-white font-extrabold"}>12
                    </div>
                    <div className={"text-lg sm:text-2xl "}>
                        Year <br/>
                        Experience <br/>
                        Working <br/>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                 className={"relative overflow-hidden w-full min-w-[300px] min-h-[500px] h-full flex justify-center items-center md:p-[60px] !pr-0 mt-10 after:absolute after:content-[''] after:w-full after:h-full after:bg-[url(/images/dot-black.png)] after:opacity-40"}>
                <div className={"contents"}>
                    <Swiper
                        slidesPerView={1}
                        height={500}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        pagination={{
                            type: "custom",
                            clickable: true,
                            renderCustom: function (swiper: SwiperType, current: number, total: number) {
                                setCurrentNumberSlider(current);
                                setSliderMaxCount(total);
                                return "";
                            }
                        }}
                        centeredSlides={true}
                        effect={'fade'}
                        modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={"relative flex justify-center items-center w-3/4 mx-auto group"}>
                                    <Image src={slide.image} alt={""}
                                           className={"[filter:brightness(0.5)] block duration-300 group-hover:scale-110"}/>
                                    <div className={"absolute z-10 bottom-0 p-[10%]"}>
                                        <h3 className={"text-xl font-extrabold w-[212px]"}>{slide.title}</h3>
                                        <p className={"text-xs"}>{slide.description}</p>
                                        <a href={slide.link}
                                           className={"text-xs font-medium  hover:text-[#c8b16f] duration-300 after:duration-300 after:content-[''] after:w-[20px] after:h-[1px] after:ml-[10px] after:inline-block after:bg-white after:mb-[4px] hover:after:w-[25px] hover:after:bg-[#c8b16f]"}>More
                                            Detail</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className={"absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10"}>
                            {[...new Array(sliderMaxCount)].map((_, index) => (
                                <div key={index}
                                     className={classNames("content-[''] w-[20px] h-[2px] border-[1px] border-[rgba(255,255,255,.3)] ", (index + 1 === currentNumberSlider) ? "bg-[#c8b16f]" : "bg-white")}></div>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CompanyStory;
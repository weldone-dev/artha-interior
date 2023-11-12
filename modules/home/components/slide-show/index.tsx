'use client'
import Image from "next/image";
import {useRef, useState} from "react";
import type {Swiper as SwiperType} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import classNames from "classnames";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import bg1 from '@/public/images/home-slider-bg-1.jpg';
import bg2 from '@/public/images/home-slider-bg-2.jpg';
import bg3 from '@/public/images/home-slider-bg-3.jpg';

const slides = [
    {
        title: 'Classy And Stylish Design',
        subtitle: <span className={"text-[#c8b16f]"}>House interior</span>,
        image: bg1
    },
    {
        title: 'Modern Architecture Design',
        subtitle: <>Interior <span className={"text-[#c8b16f]"}>design</span></>,
        image: bg2
    },
    {
        title: 'Modern Interior Design',
        subtitle: <>House <span className={"text-[#c8b16f]"}>Interior</span></>,
        image: bg3
    }
]

const SlideShow = () => {
    const swiperRef = useRef<SwiperType>();
    const [currentNumberSlider, setCurrentNumberSlider] = useState<number>(1);

    function handleSliderPrev() {
        swiperRef.current?.slidePrev();
    }

    function handleSliderNext() {
        swiperRef.current?.slideNext();
    }

    return (
        <section className={" relative"}>
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
                    renderCustom: function (swiper: SwiperType, current: number, total: number) {
                        setCurrentNumberSlider(current);
                        return ""
                    }
                }}
                centeredSlides={true}
                effect={'fade'}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={"h-full"}>
                        <div className={"relative"}>
                            <Image src={slide.image} alt={"interier"}
                                   className={"w-full h-[calc(100vh-71px)] object-cover"}/>
                            <div className={"absolute top-1/2 -translate-y-1/2 w-screen "}>
                                <div className="px-[10vw]">
                                    <h2 className={"text-3xl sm:text-5xl font-extrabold mb-5"}>{slide.title}</h2>
                                    <p className={"text-2xl sm:text-4xl font-medium"}>{slide.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={"absolute bottom-[6vh] right-[10vw] z-10 flex gap-2"}>
                <button className={"arrow-slide before:origin-right"} onClick={handleSliderPrev}><AiOutlineArrowLeft/>
                </button>
                <button className={"arrow-slide before:origin-left"} onClick={handleSliderNext}><AiOutlineArrowRight/>
                </button>
            </div>
            <div className={"absolute bottom-[6vh] left-[10vw] flex gap-2 z-10"}>
                {[...new Array(3)].map((_, index) => (
                    <div key={index}
                         className={classNames("content-[''] w-[20px] h-[2px] border-[1px] border-[rgba(255,255,255,.3)] ", (index + 1 === currentNumberSlider) ? "bg-[#c8b16f]" : "bg-white")}></div>
                ))}
            </div>
        </section>
    );
};

export default SlideShow;
"use client"
import {useRef} from 'react';
import Image from "next/image";
import {Swiper as SwiperType} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation} from 'swiper/modules';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from "@/public/images/gallery-1.jpg";
import img2 from "@/public/images/gallery-5.jpg";
import img3 from "@/public/images/gallery-2.jpg";

const slides = [
    img1,
    img2,
    img3
]
const Slider = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={"relative group"}>
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
                effect={'fade'}
                modules={[Autoplay, EffectFade, Navigation]}
            >
                <div>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={"h-full "}>
                            <Image
                                src={slide}
                                alt={"interier"}
                                className={"w-full h-full min-h-[400px] object-cover duration-300"}
                            />
                        </SwiperSlide>
                    ))}
                </div>

                <div className={"flex justify-between w-full text-4xl absolute top-1/2 -translate-y-1/2 z-50"}>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={"w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] flex justify-center items-center opacity-0 duration-300 group-hover:opacity-100 group-hover:bg-black/50 hover:!bg-[#c8b16f]"}
                    >
                        <AiOutlineArrowLeft/>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={"w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] flex justify-center items-center opacity-0 duration-300 group-hover:opacity-100 group-hover:bg-black/50 hover:!bg-[#c8b16f]"}
                    >
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
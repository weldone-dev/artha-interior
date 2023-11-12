"use client"
import React, {useState} from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const MoreProjectButton = () => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(true);

    function handleClick() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShow(false);
        }, 1000)
    }

    return show && (
        <div className={"w-full flex justify-center mt-5 mb-16"}>
            <div
                onClick={handleClick}
                className={"block duration-300 uppercase border-[1px] border-white/10 py-3 px-[25px] text-xs font-bold text-white/90 hover:text-[#292929] hover:bg-[#c8b16f]"}
            >
                {loading ? <div className={"animate-spin"}><AiOutlineLoading3Quarters/></div> : "More Projects"}
            </div>
        </div>
    );
};

export default MoreProjectButton;
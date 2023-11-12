"use client"
import {useState} from 'react';
import type {SyntheticEvent} from "react"
import classNames from "classnames";
import {AiOutlineMail, AiOutlineMessage, AiOutlineUser} from "react-icons/ai";

const style = {
    "form-input": "w-full pl-8 p-4 bg-transparent border-[rgba(255,255,255,.1)] border-[1px] text-[#f8f8f8] leading-5 outline-none focus:border-[rgba(255,255,255,.2)] duration-300",
    "input-icon": "absolute top-1/2 -translate-y-1/2 left-2"
}

const FormCustom = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <form action="#" onSubmit={handleSubmit} className={"flex flex-col gap-5"}>
            <div className={"relative w-full"}>
                <div className={style['input-icon']}>
                    <AiOutlineUser/>
                </div>
                <input
                    className={style["form-input"]}
                    placeholder={"Your Name"}
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={"relative w-full"}>
                <div className={style['input-icon']}>
                    <AiOutlineMail/>
                </div>
                <input
                    className={style["form-input"]}
                    placeholder={"Your Email"}
                    type={"email"}
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={"relative w-full"}>
                <div className={"absolute top-5 left-2"}>
                    <AiOutlineMessage/>
                </div>
                <textarea
                    className={classNames(style["form-input"], "h-[180px]")}
                    placeholder={"Your Message"}
                    value={message}
                    required={true}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type="submit"
                    className={"uppercase self-start bg-[#c8b16f] text-[#292929] text-xs font-bold tracking-wide w-[190px] h-[40px] duration-300 hover:bg-[#999] hover:text-white"}>
                {isLoading ? <>Sending</> : <>Send now</>}
            </button>
        </form>
    );
};

export default FormCustom;
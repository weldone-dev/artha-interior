'use client'
import {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Dialog, Transition} from "@headlessui/react";
import logo from "@/public/logo.png";
import {menu} from "@/modules/layout/templates/navbar/menu";


export default function MobileMenu() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className={"flex justify-between relative py-4"}>
            <Link href="/">
                <Image src={logo} alt={"artha interior"}/>
            </Link>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="-translate-x-[100%]"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-[100%]"
                    >
                        <Dialog.Panel
                            className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
                            <div className="p-4">
                                <button
                                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border transition-colors border-neutral-700 text-white ml-auto"
                                    onClick={closeMobileMenu}
                                    aria-label="Close mobile menu"
                                >
                                    <AiOutlineClose className="h-6"/>
                                </button>
                                {menu.length && (
                                    <ul className="flex w-full flex-col">
                                        {menu.map((item) => (
                                            <li
                                                className="py-4 text-xl text-white/60 transition-colors hover:text-white font-extrabold"
                                                key={item.title}
                                            >
                                                <Link href={item.path} onClick={closeMobileMenu}
                                                      className={"block w-full"}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>

            <button
                className={"text-2xl"}
                aria-label="Open mobile menu"
                onClick={openMobileMenu}
            >
                <AiOutlineMenu/>
            </button>
        </div>

    )
}
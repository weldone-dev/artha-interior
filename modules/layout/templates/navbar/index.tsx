import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {menu} from "@/modules/layout/templates/navbar/menu";
import MobileMenu from "@/modules/layout/templates/navbar/mobile-menu";
import logo from "@/public/logo.png";

export default async function Navbar() {
    return (
        <nav className={"container bg-neutral-900 text-white"}>
            <div className={"block flex-none md:hidden"}>
                <MobileMenu/>
            </div>
            <div className={"hidden md:flex py-4 justify-between"}>
                <Link href="/">
                    <Image src={logo} alt={"artha interior"}/>
                </Link>
                {menu.length > 0 && (
                    <ul className={"flex items-center text-xl gap-3"}>
                        {menu.map((item, index) => (
                            <li key={index}
                                className={"[&:not(:first-child)]:social-icon relative flex items-center gap-3 text-white/80 hover:text-white duration-300"}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}
import Link from "next/link";
import type {ComponentProps, FC} from 'react';

const Footer: FC<ComponentProps<"footer">> = (props) => {
    return (
        <footer className={"py-8 bg-[#191919]"}>
            <div className="container">
                <div className={"flex flex-wrap justify-between pb-4"}>
                    <ul className={"flex gap-4"}>
                        <li><Link href={"#"} className={"uppercase hover:text-[#c8b16f] duration-300"}>Terms</Link></li>
                        <li><Link href={"/contact"}
                                  className={"uppercase hover:text-[#c8b16f] duration-300"}>Contact</Link></li>
                    </ul>
                    <ul className={"flex gap-4"}>
                        <li><Link href={'#'} className={"hover:text-[#c8b16f] duration-300"}>ENG</Link></li>
                        <li><Link href={'#'} className={"hover:text-[#c8b16f] duration-300"}>FRA</Link></li>
                        <li><Link href={'#'} className={"hover:text-[#c8b16f] duration-300"}>GER</Link></li>
                    </ul>

                </div>
                <div
                    className={"w-full flex flex-wrap justify-between text-xs pt-5 border-t-[1px] border-[rgba(255,255,255,.1)]"}>
                    <ul className={"flex gap-4"}>
                        <li><Link href="#" className={"hover:text-[#c8b16f] duration-300"}>TW</Link></li>
                        <li><Link href="#" className={"hover:text-[#c8b16f] duration-300"}>FB</Link></li>
                        <li><Link href="#" className={"hover:text-[#c8b16f] duration-300"}>BE</Link></li>
                        <li><Link href="#" className={"hover:text-[#c8b16f] duration-300"}>GH</Link></li>
                    </ul>
                    <span>2023 © ARTHA, ALL RIGHT RESERVED</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
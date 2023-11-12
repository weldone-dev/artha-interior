import type {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import imgAbout from '@/public/images/img-about.webp'

interface Props {
    title: string;
    subtitle: string;
}

const SubHeader: FC<Props> = ({title, subtitle}) => {
    return (
        <section className={"min-h-[350px] relative flex justify-center items-center"}>
            <Image src={imgAbout} alt={"About"}
                   className={"absolute w-full h-full object-cover -z-10 [filter:brightness(0.62)]"}/>
            <div className="container">
                <h2 className={"text-2xl uppercase font-extrabold text-center tracking-[0.2em] after:content-[''] after:block after:mx-auto after:my-2 after:bg-[#c8b16f] after:w-16 after:h-0.5"}>{title}</h2>
                <ul className={"text-xs font-semibold flex gap-3 tracking-[0.2em] justify-center uppercase mt-3"}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>/</li>
                    <li>{subtitle}</li>
                </ul>
            </div>
        </section>
    );
};

export default SubHeader;
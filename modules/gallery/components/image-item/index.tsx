import {FC} from 'react';
import Image from "next/image";

interface IProps {
    image: string;
}

const ImageItem: FC<IProps> = ({image}) => {
    return (
        <div className={"relative transition-all h-full"}>
            <Image
                src={image}
                alt={"gallery"}
                className={"duration-500  object-cover w-full h-full group-hover:[filter:brightness(0.3)] group-hover:scale-110 opacity-0 scale-0"}
                width={1024}
                height={1024}
                onLoad={(image) => image.currentTarget.classList.remove("opacity-0", "scale-0")}
            />
        </div>
    );
};

export default ImageItem;
import type {FC} from "react";

interface IProps {
    src: string;
}

const Map: FC<IProps> = ({src}) => {
    return (
        <section>
            <iframe
                src={src}
                width="600"
                height="450"
                className={"border-0 w-full"}
                allowFullScreen={false}>
            </iframe>
        </section>
    );
};

export default Map;
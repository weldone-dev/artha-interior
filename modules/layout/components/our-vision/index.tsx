import type {ComponentProps, FC} from 'react';
import classNames from "classnames";

const OurVision: FC<ComponentProps<"section">> = (props) => {
    const {className, ...otherProps} = props

    return (
        <section className={classNames("relative", className)} {...otherProps}>
            <div className="container">
                <div
                    className={"py-[80px] after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-[url(/images/dot-black.png)] after:opacity-40"}>
                    <h2 className={"uppercase font-extrabold text-3xl"}>Our Vision</h2>
                    <p className={"my-3 text-lg"}>Architectural works of art, in the material form of buildings, are
                        often perceived as cultural symbols and as works of art. Historical civilizations are often
                        identified with their surviving architectural achievements.</p>
                </div>
            </div>

        </section>
    );
};

export default OurVision;
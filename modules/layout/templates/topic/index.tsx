import type {ComponentProps, FC} from 'react';
import classNames from "classnames";

const style = "text-2xl sm:text-3xl font-extrabold uppercase mb-8 pt-16 after:content-[''] after:w-16 after:h-1 after:mt-4 sm:after:mt-8 after:bg-[#c8b16f] after:block"
const Topic: FC<ComponentProps<"h2">> = (props) => {
    const {className, ...otherProps} = props
    return (
        <h2 className={classNames(style, className)} {...otherProps}>
            {props.children}
        </h2>
    );
};

export default Topic;
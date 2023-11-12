import type {ComponentProps, FC} from 'react';
import classNames from "classnames";

const styles = {
    "filter__button": "relative block text-white duration-300 py-[5px] after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#c8b16f] after:duration-300 hover:text-white/50 hover:after:scale-x-100",
    "filter__button-active": "text-white/50 after:scale-x-100"
}

interface IProps extends ComponentProps<"button"> {
    isActive: boolean;
}

const ButtonFilter: FC<IProps> = ({isActive, className, ...otherProps}) => {
    return (
        <button
            className={classNames(styles["filter__button"], isActive && styles["filter__button-active"], className)}
            {...otherProps}
        ></button>
    );
};

export default ButtonFilter;
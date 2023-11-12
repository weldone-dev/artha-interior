import type {ComponentProps, FC} from 'react';
import classNames from "classnames";
import {IContact} from "@/types/global";

const styles = {
    "name": "relative w-[90px] inline-block mr-3 after:content-[':']  after:absolute after:font-normal after:right-0",
    "line": "border-b-[1px] border-white/10 py-2"
}

interface IProps extends ComponentProps<"div"> {
    contact: Omit<IContact, "map">;
}

const ContactInformation: FC<IProps> = ({contact, className, ...otherProps}) => {
    return (
        <div className={classNames("w-full sm:min-w-[400px] sm:w-full", className)} {...otherProps}>
            <h2 className={"relative text-lg font-semibold pb-4 border-b-[1px] border-[rgba(255,255,255,0.1)] mb-4 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/4 after:h-1 after:bg-[#c8b16f]"}>
                Contact Information
            </h2>
            <address className={"flex flex-col"}>
                <span className={styles["line"]}>
                    <b className={styles["name"]}>ADDRESS</b>
                    {contact.address}
                </span>
                <span className={styles["line"]}>
                    <b className={styles["name"]}>PHONE</b>
                    <a href={"tel:" + contact.number}>{contact.number}</a>
                </span>
                <span className={styles["line"]}>
                    <b className={styles["name"]}>EMAIL</b>
                    <a href={"mailto:" + contact.mail}>{contact.mail}</a>
                </span>
                <span className={styles["line"]}>
                    <b className={styles["name"]}>WEB</b>
                    <a href={"https://" + contact.site}>{contact.site}</a>
                </span>
            </address>
        </div>
    );
};

export default ContactInformation;
"use client"
import {useState} from "react"
import type {FC} from "react"
import classNames from "classnames";
import {getMonth, getNameMount, getYear} from "@/lib/utils/get-date";

const styles = {
    "name": "relative w-[150px] inline-block mr-3 after:content-[':']  after:absolute after:font-normal after:right-0",
    "line": "border-b-[1px] border-[#b7a161] py-4 text-sm"
}

interface IProps {
    date: number;
}

const Detail: FC<IProps> = ({date}) => {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div className={"absolute z-10 right-0 duration-300 top-0"}>
            <div
                className={classNames("duration-300 bg-[#c8b16f] text-white origin-bottom", open ? "scale-y-100 block" : "scale-y-0")}>
                <div className={"py-[30px] px-[40px]"}>
                    <h2 className={"text-lg font-semibold uppercase"}>Projects Detail</h2>
                    <ul className={"py-2"}>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Categories</span>
                            <span>Architect, Renovation, Tilling</span>
                        </li>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Client</span>
                            <span>Johny Dono</span>
                        </li>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Date</span>
                            <span>{getNameMount(date)} {getMonth(date)}, {getYear(date)}</span>
                        </li>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Budget</span>
                            <span> $ 8,00,000</span>
                        </li>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Duration</span>
                            <span>6 Months</span>
                        </li>
                        <li className={styles["line"]}>
                            <span className={styles["name"]}>Tags</span>
                            <span>Commercial</span>
                        </li>
                    </ul>
                    <div className={"cursor-pointer text-black font-bold text-sm mt-4"}
                         onClick={() => handleClose()}
                    >
                        HIDE DETAIL →
                    </div>
                </div>
            </div>
            <div
                className={classNames("cursor-pointer p-5 font-semibold bg-[#c8b16f] text-black origin-top duration-300", open ? "scale-y-0" : "scale-y-100 block")}
                onClick={() => handleOpen()}>← SHOW DETAIL
            </div>
        </div>

    );
};

export default Detail;
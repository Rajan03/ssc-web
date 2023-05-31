import clsx from "clsx";
import React from "react";

interface AnimatedBtnProps {
    text: string;
    theme?: string;
    hoverTheme?: string;
    className?: string;
}

const AnimatedBtn: React.FC<AnimatedBtnProps> = ({
                                                     text,
                                                     className,
                                                     theme= "bg-black",
                                                     hoverTheme = "bg-primary-600",
                                                 }) => {
    const cls = clsx(
        "relative min-w-[18rem] min-h-[6rem] flex items-center justify-center rounded-sm"
        + " overflow-hidden transition-all "
        + theme + " "
        + className
    )

    const hoverCls = clsx(
        "absolute w-0 h-0 rounded-full transition-all duration-300 ease-out "
        + hoverTheme
    )

    const textCls = clsx("font-medium z-10 w-full text-white group-hover:text-white")
    return (
        <button className={cls + " group"}>
            <span className={hoverCls + " group-hover:w-[30rem] group-hover:h-[30rem]"}/>
            <span className={textCls}>{text}</span>
        </button>
    );
};

export default AnimatedBtn;

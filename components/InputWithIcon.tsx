import React from "react";
import {IconType} from "react-icons";

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: IconType;
    label: string;
    className?: string;
}

const InputWithIcon = (props: InputWithIconProps) => {
    const {Icon, label, className, ...other} = props;

    return (
        <div className={"relative flex flex-col items-stretch " + className}>
            <label className="text-lg text-neutral-500">{label}</label>
            <div className={'flex-1 flex items-center'}>
                <input type="text" className={'web-input flex-1 self-stretch'} {...other} />
                {Icon && (
                    <div className="absolute top-1/2 right-4">
                        <Icon className={'text-3xl text-primary-600'}/>
                    </div>
                )}
            </div>
        </div>)
}

export default InputWithIcon;

import React, {forwardRef} from "react";
import {FieldError} from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    error: FieldError | undefined,
    id: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(({label, className, error, id, ...props}: InputProps, ref: any) => {

    return (
        <div className={'flex flex-col relative ' + className}>
            <label htmlFor={id}
                   className={`self-start text-2xl font-light mb-2 ${error ? 'text-red-500' : 'text-dark'}`}>
                {label}
            </label>
            <input
                ref={ref}
                id={id}
                className={`flex-1 align-top border focus:border-transparent ${error ? 'border-red-500 web-input-error' : 'border-primary-50 web-input '}`}
                {...props}
            />
            {error && <p className={'absolute bottom-[-16px] text-red-500 text-[11px]'}>{error.message}</p>}
        </div>
    )
});

export default Input
